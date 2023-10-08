'use client';

import { ContactFormBody, contactSchema } from '@/app/api/contact/contract';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from '../ui/use-toast';

const ContactForm = () => {
    const contactFormSchema = useForm<ContactFormBody>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
        },
    });

    const [isPending, startTransition] = useTransition();

    const mutation = useMutation({
        mutationFn: (body: ContactFormBody) => {
            return axios.post(`/api/contact`, body);
        },
    });

    const isLoading = isPending || mutation.isLoading;

    const onSubmit = async (formValues: ContactFormBody) => {
        try {
            startTransition(() => {
                mutation.mutate(formValues, {
                    onSuccess: () => {
                        toast({
                            title: 'Mensagem enviada com sucesso !',
                            description: 'Entraremos em contacto consigo brevemente.',
                            variant: 'success',
                        });
                        contactFormSchema.reset();
                    },
                    onError: () => {
                        toast({
                            title: 'Erro ao enviar mensagem',
                            description: 'Tente novamente brevemente.',
                            variant: 'destructive',
                        });
                    },
                });
            });
        } catch (e) {
            toast({
                title: 'Erro ao enviar mensagem',
                description: 'Tente novamente brevemente.',
                variant: 'destructive',
            });
            console.error('ContactForm::onSubmit produced error ' + e);
        }
    };

    return (
        <Form {...contactFormSchema}>
            <form
                onSubmit={contactFormSchema.handleSubmit(onSubmit)}
                className="flex h-full w-full flex-1 flex-col justify-between gap-4"
            >
                <FormField
                    control={contactFormSchema.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    disabled={isLoading}
                                    type="text"
                                    placeholder="O seu nome..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={contactFormSchema.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    disabled={isLoading}
                                    type="email"
                                    placeholder="O seu email..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={contactFormSchema.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="tel"
                                    disabled={isLoading}
                                    placeholder="O seu numéro de telemovel..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={contactFormSchema.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea
                                    disabled={isLoading}
                                    placeholder="A sua mensagem"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {isLoading ? (
                    <Button aria-label="Enviando mensagem" disabled type="submit">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando mensagem
                    </Button>
                ) : (
                    <Button aria-label="Enviar mensagem de contacto" type="submit">
                        Enviar
                    </Button>
                )}
            </form>
        </Form>
    );
};

export default ContactForm;
