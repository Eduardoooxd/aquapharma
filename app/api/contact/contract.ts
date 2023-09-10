import * as z from 'zod';

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const contactSchema = z.object({
    name: z
        .string({
            required_error: 'Introduza um nome válido.',
            invalid_type_error: 'Introduza um nome válido.',
        })
        .min(1, {
            message: 'Introduza um nome válido.',
        }),
    email: z
        .string({
            required_error: 'Introduza um email válido.',
            invalid_type_error: 'Introduza um email válido.',
        })
        .email('Introduza um email válido.')
        .min(1, 'Introduza um email.'),
    phoneNumber: z
        .string({
            required_error: 'Introduza um numéro de telemovél válido.',
            invalid_type_error: 'Introduza um numéro de telemovél válido.',
        })
        .regex(phoneRegex, { message: 'Introduza um numéro de telemovél válido.' })
        .min(9, 'Introduza um numéro de telemovél válido.'),
    message: z
        .string({
            required_error: 'Introduza a mensagem de contacto.',
            invalid_type_error: 'Introduza uma mensagem de contacto válida.',
        })
        .min(1, 'Introduza a mensagem de contacto.')
        .max(1000, {
            message: 'A mensagem não pode ter mais que 1000 caracteres.',
        }),
});

export type ContactFormBody = z.infer<typeof contactSchema>;
