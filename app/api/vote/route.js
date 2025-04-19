import { NextResponse } from 'next/server';
import Post from '@/models/Post';
import connectMongo from '@/libs/mongoose';

export async function POST(req) {
  const { searchParams } = req.nextUrl;
  const postId = searchParams.get('postId');

  try {
    await connectMongo();

    const post = await Post.findById(postId);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    post.votesCounter += 1;
    await post.save();
    return NextResponse.json({ message: 'Vote added' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: e?.message || 'Error adding vote' }, { status: 500 });
  }
}

export async function DELETE(req) {
  const { searchParams } = req.nextUrl;
  const postId = searchParams.get('postId');

  try {
    await connectMongo();

    const post = await Post.findById(postId);

    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    post.votesCounter -= 1;
    await post.save();
    return NextResponse.json({ message: 'Vote added' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: e?.message || 'Error adding vote' }, { status: 500 });
  }
}