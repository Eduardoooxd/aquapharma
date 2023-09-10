import { ENV_VARIABLES } from '@/config/env';
import { NewContactEmail } from '@/emails/newContact';
import { render } from '@react-email/render';
import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactSchema } from './contract';

const { CONTACT_HOST, CONTACT_EMAIL, CONTACT_PASSWORD, NTFY_TOPIC_URL } = ENV_VARIABLES;

const axiosInstance = axios.create({
    baseURL: NTFY_TOPIC_URL,
    headers: {
        Actions: 'view, Open Gmail, https://mail.google.com/mail/u/0/',
        Priority: 5,
        Tags: 'partying_face,Aquapharma,Novo Contacto',
        Title: 'Aquapharma | Novo Contacto',
    },
});

export async function POST(request: Request) {
    const body = await request.json();
    const verifyBody = contactSchema.safeParse(body);
    if (!verifyBody.success) {
        return NextResponse.json({ message: 'Wrong format for body' }, { status: 400 });
    }

    const parsedBody = contactSchema.parse(body);
    const { name, email, message, phoneNumber } = parsedBody;

    if (process.env.NODE_ENV === 'development') {
        return NextResponse.json({ message: 'Sending Emails disabled for dev env' });
    }

    const transporter = nodemailer.createTransport({
        host: CONTACT_HOST,
        port: 465,
        secure: true,
        requireTLS: true,
        auth: {
            user: CONTACT_EMAIL,
            pass: CONTACT_PASSWORD,
        },
    });

    const notificationBody = `
          \n
          Nome do contacto: ${name}
          Email: ${email}
          Numero de Telefone: ${phoneNumber}
          Messagem: ${message}
          \n
          `;

    const emailHtml = render(NewContactEmail({ body: parsedBody }));

    try {
        // Send the email using the nodemailer transporter
        await transporter.sendMail({
            from: `${process.env.CONTACT_EMAIL}`,
            to: `${process.env.CONTACT_EMAIL}`,
            subject: 'Aquapharma | Novo Contacto 🥳',
            html: emailHtml,
        });

        axiosInstance.post('https://ntfy.sh/eduardo_notifications', notificationBody);

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}
