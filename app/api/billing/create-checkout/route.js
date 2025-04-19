import { NextResponse } from "next/server";
import { auth } from '@/auth';
import connectMongo from '@/libs/mongoose';
import User from '@/models/User';
import Stripe from 'stripe';

export async function POST(req) {
	try {
			const body = await req.json();

      if (!body.successUrl || !body.cancelUrl) {
        return NextResponse.json(
          { error: 'successUrl and cancelUrl are required' },
          { status: 400 }
        );
      }

      const session = await auth();

      await connectMongo();
      const user = await User.findById(session.user.id);
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

      // TODO: get price from body
      const stripeCheckoutSession = await stripe.checkout.sessions.create({
        mode: 'subscription',
        line_items: [
          {
            price: process.env.STRIPE_YEARLY_PRICE_ID,
            quantity: 2,
          },
        ],
        success_url: body.successUrl,
        cancel_url: body.cancelUrl,
        customer_email: user.email,
        client_reference_id: user._id.toString(), // add toString() to avoid mongo object id error
      });
      return NextResponse.json({ url: stripeCheckoutSession.url });
	} catch (e) {
		return NextResponse.json({ error: e.message }, { status: 500 });
	}
}
