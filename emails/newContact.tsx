import { ContactFormBody } from '@/app/api/contact/contract';
import { Body, Container, Head, Heading, Html, Img, Preview, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';

interface NewContactEmailProps {
    body: ContactFormBody;
}

export function NewContactEmail({ body }: NewContactEmailProps) {
    const { name, email, message, phoneNumber } = body;
    return (
        <Html>
            <Head />
            <Preview>Aquapharma | Novo Contacto 🥳'</Preview>
            <Tailwind>
                <Body>
                    <Container>
                        <Heading className="relative flex gap-4">
                            <Img
                                src={`${baseUrl}/static/aquapharma-logo.jpg`}
                                width="120"
                                height="50"
                                alt="Aquapharma logo"
                            />
                            | Novo Contacto 🥳
                        </Heading>

                        <Text className="text-base leading-6">Nome do cliente: {name}</Text>
                        <Text className="text-base leading-6">Email do cliente: {email}</Text>
                        <Text className="text-base leading-6">
                            Numéro do cliente: {phoneNumber}
                        </Text>

                        <Text>Mensagem do cliente: {message}</Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
