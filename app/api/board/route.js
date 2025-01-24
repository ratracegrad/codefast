import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import connectMongo from '@/libs/mongoose';
import User from '@/models/User';
import Board from '@/models/Board';

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.name) {
      return NextResponse.json(
        { error: 'Board Name is required' },
        { status: 400 }
      );
    }

    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: 'Not Authorized' }, { status: 401 });
    }

    await connectMongo();

    const user = await User.findById(session.user.id);

    const board = await Board.create({
      userId: user._id,
      name: body.name,
    });

    user.boards.push(board._id);
    await user.save();

    return NextResponse.json({board});
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function DELETE(req) {
  try {
    // DELETE
    const { searchParams } = req.nextUrl;
    const boardId = searchParams.get('boardId');

    if (!boardId) {
      return NextResponse.json(
        { error: 'Board ID is required' },
        { status: 400 }
      );
    }

    const session = await auth();

    if (!session) {
      return NextResponse.json({ error: 'Not Authorized' }, { status: 401 });
    }

    await Board.deleteOne({ _id: boardId, userId: session?.user?.id });

    const user = await User.findById(session?.user?.id);
    user.boards = user.boards.filter((id) => id.toString() !== boardId);

    await user.save();

    return NextResponse.json({ message: 'Board deleted' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}