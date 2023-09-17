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
                        <Container className="flex flex-col items-center justify-center gap-4">
                            <Img
                                src={`${baseUrl}/static/aquapharma-logo.jpg`}
                                width="120"
                                height="50"
                                alt="Aquapharma logo"
                            />
                            <Heading className="text-3xl font-bold">Novo Contacto 🥳</Heading>
                        </Container>

                        <Container className="flex flex-col items-center justify-center gap-4">
                            <Text className="text-base leading-6">
                                <b>Nome do cliente:</b> {name}
                            </Text>
                            <Text className="text-base leading-6">
                                <b>Email do cliente:</b> {email}
                            </Text>
                            <Text className="text-base leading-6">
                                <b>Numéro do cliente:</b> {phoneNumber}
                            </Text>

                            <Text className="text-base leading-6">
                                <b> Mensagem do cliente:</b> {message}
                            </Text>
                        </Container>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
