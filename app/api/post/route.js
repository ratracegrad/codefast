import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import connectMongo from '@/libs/mongoose';
import Post from '@/models/Post';
import User from '@/models/User';
import Board from '@/models/Board';
import { Filter } from 'bad-words';

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, description } = body;

    const { searchParams } = req.nextUrl;
    const boardId = searchParams.get('boardId');
    const badWordsFilter = new Filter();
    const filteredTitle = badWordsFilter.clean(title);
    const filteredDescription = badWordsFilter.clean(description);

    if (!filteredTitle) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 }
      );
    }

    const session = await auth();

    // Connect to MongoDB
    await connectMongo();

    const post = await Post.create({
      title: filteredTitle,
      description: filteredDescription,
      boardId,
      userId: session?.user?.id,
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create post' },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    // DELETE
    const { searchParams } = req.nextUrl;
    const postId = searchParams.get('postId');

    if (!postId) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }

    const session = await auth();

    await connectMongo();

    // if (!session) {
    //   return NextResponse.json({ error: 'Not Authorized' }, { status: 401 });
    // }

    const user = await User.findById(session?.user?.id);

    if (!user.hasAccess) {
      return NextResponse.json(
        { error: 'Please subscribe first' },
        { status: 403 }
      );
    }

    const post = await Post.findById(postId);
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    if (!user.boards.includes(post.boardId.toString())) {
      return NextResponse.json(
        { error: 'You are not authorized to delete this post' },
        { status: 401 }
      );
    }

    await Post.deleteOne({ _id: postId });

    return NextResponse.json({ message: 'Post deleted' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}