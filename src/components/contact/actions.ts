"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

type ContactFormData = z.infer<typeof formSchema>;

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  const validationResult = formSchema.safeParse(data);

  if (!validationResult.success) {
    return { success: false, error: "Invalid form data." };
  }

  // Simulate sending an email or saving to a database
  console.log("Received contact form submission:", validationResult.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulate a potential error
  // if (Math.random() < 0.2) { // 20% chance of error
  //   return { success: false, error: "A simulated server error occurred. Please try again." };
  // }

  // In a real application, you would integrate with an email service (e.g., SendGrid, Resend)
  // or save the data to a database (e.g., Firebase Firestore).
  // Example:
  // try {
  //   await sendEmail({
  //     to: "your-email@example.com",
  //     from: "noreply@yourdomain.com",
  //     subject: `New Contact Form Submission from ${validationResult.data.name}`,
  //     html: `<p>Name: ${validationResult.data.name}</p>
  //            <p>Email: ${validationResult.data.email}</p>
  //            <p>Message: ${validationResult.data.message}</p>`,
  //   });
  //   return { success: true };
  // } catch (emailError) {
  //   console.error("Failed to send email:", emailError);
  //   return { success: false, error: "Failed to send message due to a server issue." };
  // }

  return { success: true };
}
