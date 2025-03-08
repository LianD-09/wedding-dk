import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const comments = await prisma.comment.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(comments);
}

export async function POST(request: Request) {
  const { author, message } = await request.json();

  if (!author || !message) {
    return NextResponse.json(
      { error: 'Missing author or message' },
      { status: 400 },
    );
  }

  const comment = await prisma.comment.create({
    data: {
      author,
      message,
    },
  });

  return NextResponse.json(comment);
}
