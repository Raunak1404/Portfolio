"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "./actions";
import React, { useState, useTransition } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message must not exceed 500 characters."
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");


  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormData) {
    setFormStatus("idle");
    startTransition(async () => {
      try {
        const result = await submitContactForm(values);
        if (result.success) {
          toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
            variant: "default", 
          });
          setFormStatus("success");
          form.reset();
        } else {
          throw new Error(result.error || "An unknown error occurred.");
        }
      } catch (error: any) {
        toast({
          title: "Uh oh! Something went wrong.",
          description: error.message || "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
        setFormStatus("error");
      }
    });
  }
  
  // Client-side animation for floating labels (basic example)
  // More advanced floating labels might require more complex CSS or JS.
  // This adds 'has-value' class when input has value for potential CSS targeting.
  React.useEffect(() => {
    const inputs = document.querySelectorAll('.form-input-field');
    inputs.forEach(input => {
      const htmlInput = input as HTMLInputElement | HTMLTextAreaElement;
      const handler = () => {
        if (htmlInput.value) {
          htmlInput.classList.add('has-value');
        } else {
          htmlInput.classList.remove('has-value');
        }
      };
      htmlInput.addEventListener('input', handler);
      // Initial check
      handler();
      return () => htmlInput.removeEventListener('input', handler);
    });
  }, [form.formState.isSubmitSuccessful]); // Rerun if form is reset

  return (
    <Card className="shadow-xl w-full">
      <CardHeader>
        <CardTitle className="text-3xl text-accent">Send me a message</CardTitle>
        <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input placeholder=" " {...field} className="form-input-field peer pt-6 placeholder-transparent text-base"/>
                  </FormControl>
                  <FormLabel className="absolute left-3 top-1 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
                    Your Name
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Input type="email" placeholder=" " {...field} className="form-input-field peer pt-6 placeholder-transparent text-base"/>
                  </FormControl>
                  <FormLabel className="absolute left-3 top-1 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
                    Your Email
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormControl>
                    <Textarea placeholder=" " {...field} className="form-input-field peer min-h-[120px] pt-6 placeholder-transparent text-base" />
                  </FormControl>
                   <FormLabel className="absolute left-3 top-1 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:text-xs">
                    Your Message
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              disabled={isPending || formStatus === 'success'} 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg shadow-md transition-all transform hover:scale-105"
            >
              {isPending ? (
                <span className="animate-pulse">Sending...</span>
              ) : formStatus === 'success' ? (
                <>
                  <CheckCircle className="mr-2 h-5 w-5" /> Sent!
                </>
              ) : (
                 <>
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </>
              )}
            </Button>
            {formStatus === 'error' && (
                <p className="text-sm text-destructive flex items-center justify-center">
                    <AlertTriangle className="mr-2 h-4 w-4" /> Failed to send. Please try again.
                </p>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
