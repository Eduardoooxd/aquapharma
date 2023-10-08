import * as z from 'zod';

const envSchema = z.object({
    CONTACT_HOST: z.string(),
    CONTACT_RECEIVER: z.string(),
    CONTACT_EMAIL: z.string(),
    CONTACT_PASSWORD: z.string(),
    NTFY_TOPIC_URL: z.string(),
});

export type envSchemaType = z.infer<typeof envSchema>;

export const ENV_VARIABLES = envSchema.parse(process.env);
