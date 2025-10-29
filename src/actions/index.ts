import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  sendContactEmail: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      message: z.string().optional(),
    }),
    handler: async (input) => {
      const { data, error } = await resend.emails.send({
        from: "Erton Talent <sales@erton.se>",
        to: ["sales@erton.se"],
        subject: `Contact Form: ${input.name} ${input.lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${input.name} ${input.lastName}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message || "No message provided"}</p>
        `,
      });

      if (error) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: error.message,
        });
      }

      return data;
    },
  }),
};

