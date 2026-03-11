"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { sileo } from "sileo";
import { contactConfig } from "@/config/Contact";
import * as z from "zod";

import Chat from "../svgs/Chat";

const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.email({
    message: "Please enter a valid email address.",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Phone number must be at least 10 characters.",
    })
    .regex(/^[\+]?[1-9][\d]{0,15}$/, {
      message: "Please enter a valid phone number.",
    }),
  message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(1000, {
      message: "Message must not exceed 1000 characters.",
    }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        sileo.success({
          title: contactConfig.form.successTitle,
          description: contactConfig.form.successDescription,
        });
        form.reset();
      } else {
        sileo.error({
          title: contactConfig.form.errorTitle,
          description: result.error || contactConfig.form.errorDescription,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      sileo.error({
        title: contactConfig.form.errorTitle,
        description: contactConfig.form.errorDescription,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader>
        <CardTitle>Fill in your details</CardTitle>
        <CardDescription>
          I will get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
          noValidate
        >
          <FieldGroup>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Controller
                control={form.control}
                name="name"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="contact-name">
                      {contactConfig.form.labels.name} *
                    </FieldLabel>
                    <Input
                      id="contact-name"
                      placeholder={contactConfig.form.placeholders.name}
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                )}
              />

              <Controller
                control={form.control}
                name="phone"
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="contact-phone">
                      {contactConfig.form.labels.phone} *
                    </FieldLabel>
                    <Input
                      id="contact-phone"
                      placeholder={contactConfig.form.placeholders.phone}
                      aria-invalid={fieldState.invalid}
                      {...field}
                    />
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                )}
              />
            </div>

            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-email">
                    {contactConfig.form.labels.email} *
                  </FieldLabel>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder={contactConfig.form.placeholders.email}
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="message"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="contact-message">
                    {contactConfig.form.labels.message} *
                  </FieldLabel>
                  <FieldDescription>
                    Tell me about your project, or what you need help with.
                  </FieldDescription>
                  <Textarea
                    id="contact-message"
                    placeholder={contactConfig.form.placeholders.message}
                    className="min-h-30 resize-none"
                    aria-invalid={fieldState.invalid}
                    {...field}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />
          </FieldGroup>

          <Button type="submit" className="w-fit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending your message...
              </>
            ) : (
              <>
                <Chat className="mr-2 h-4 w-4" />
                {contactConfig.form.submitButton}
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
