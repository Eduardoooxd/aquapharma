import { NextResponse } from 'next/server';
/*
import nodemailer from 'nodemailer';
import * as z from 'zod';

const contactFormSchema = z.object({
    name: z.string().min(2).max(255),
    email: z.string().email(),
    message: z.string().max(1000),
    phone: z.string().min(9).max(20),
});

export type ContactFormBody = z.infer<typeof contactFormSchema>;*/

export async function POST(request: Request) {
    const body = await request.json();
    /*
    const parsedBody = contactFormSchema.safeParse(body);
    if (!parsedBody.success) {
        return NextResponse.json({ message: 'Wrong format for body' }, { status: 400 });
    }

    const { name, email, message, phone } = contactFormSchema.parse(body);

    if (process.env.NODE_ENV === 'development') {
        return NextResponse.json({ message: 'Sending Emails disabled for dev env' });
    }

    const transporter = nodemailer.createTransport({
        host: `${process.env.CONTACT_HOST}`,
        port: 465,
        secure: true,
        auth: {
            user: `${process.env.CONTACT_EMAIL}`,
            pass: `${process.env.CONTACT_PASSWORD}`,
        },
    });

    const htmlToSend = `<p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Message: ${message}</p>
          `;

    try {
        // Send the email using the nodemailer transporter
        await transporter.sendMail({
            from: `${process.env.CONTACT_EMAIL}`,
            to: `${process.env.CONTACT_EMAIL}`,
            subject: 'Nova submissão de formulário de contacto',
            html: htmlToSend,
        });

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }*/
    return NextResponse.json({ message: 'Email sent successfully' });
}
