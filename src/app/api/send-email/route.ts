import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'rohanrpatil764@gmail.com',
      subject: 'New Message from Portfolio',
      text: message,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
} 