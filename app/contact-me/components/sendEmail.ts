// actions/sendEmail.ts
"use server"; // <-- THIS IS CRITICAL: It tells Next.js to run this code only on the server

import { Resend } from "resend";

// Initialize Resend here, where it is guaranteed to run on the server
// Next.js will correctly load the environment variable here.
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const email = formData.get("emailAddress") as string;
  const message = formData.get("message") as string;
  const subject = formData.get("subject") as string;
  const fullName = formData.get("fullName") as string;

  if (!resend) {
    return { success: false, error: "Resend client initialization failed." };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["kuding755@gmail.com"],
      subject: `New Message from ${fullName},${email}  with subject: ${subject}`,
      text: message,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Server Action Error:", err);
    return {
      success: false,
      error: "Failed to send email due to a server error.",
    };
  }
}
