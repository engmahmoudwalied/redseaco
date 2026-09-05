import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
  subject?: string;
}

export const EMAILJS_CONFIG = {
  serviceId: (import.meta.env["VITE_EMAILJS_SERVICE_ID"] as string | undefined) || "",
  templateId: (import.meta.env["VITE_EMAILJS_TEMPLATE_ID"] as string | undefined) || "",
  publicKey: (import.meta.env["VITE_EMAILJS_PUBLIC_KEY"] as string | undefined) || "",
  toEmail: (import.meta.env["VITE_EMAILJS_TO_EMAIL"] as string | undefined) || "mohamedkhaled74222310@gmail.com",
};


/**
 * Validates whether EmailJS environment variables are configured.
 */
export function isEmailJSConfigured(): boolean {
  return Boolean(
    EMAILJS_CONFIG.serviceId &&
    EMAILJS_CONFIG.templateId &&
    EMAILJS_CONFIG.publicKey &&
    EMAILJS_CONFIG.serviceId !== "your_service_id_here" &&
    EMAILJS_CONFIG.templateId !== "your_template_id_here" &&
    EMAILJS_CONFIG.publicKey !== "your_public_key_here"
  );
}

/**
 * Sends a contact form email via EmailJS SDK with fallback to direct REST API.
 */
export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message?: string }> {
  const serviceId = EMAILJS_CONFIG.serviceId;
  const templateId = EMAILJS_CONFIG.templateId;
  const publicKey = EMAILJS_CONFIG.publicKey;
  const toEmail = EMAILJS_CONFIG.toEmail;

  if (!isEmailJSConfigured()) {
    console.warn("EmailJS credentials are not configured in .env. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.");
    return {
      success: false,
      message: "EmailJS is not configured. Please add your EmailJS keys in the .env file.",
    };
  }

  const templateParams = {
    to_email: toEmail,
    to_name: "Red Sea For Roads",
    from_name: data.name,
    user_name: data.name,
    name: data.name,
    from_email: data.email,
    user_email: data.email,
    email: data.email,
    reply_to: data.email,
    phone: data.phone || "N/A",
    message: data.message,
    subject: data.subject || `رسالة جديدة من ${data.name} - موقع البحر الأحمر للطرق`,
    sent_at: new Date().toLocaleString("ar-EG", { timeZone: "Africa/Cairo" }),
  };

  try {
    // Attempt sending via @emailjs/browser SDK
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      {
        publicKey: publicKey,
      }
    );

    if (response.status === 200 || response.text === "OK") {
      return { success: true };
    }
    
    throw new Error(`EmailJS responded with status: ${response.status}`);
  } catch (error: any) {
    console.error("EmailJS SDK error, attempting direct API fallback...", error);
    
    // Direct API fallback
    try {
      const apiResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams,
        }),
      });

      if (apiResponse.ok) {
        return { success: true };
      }

      const errorText = await apiResponse.text();
      return {
        success: false,
        message: errorText || "Failed to send email via EmailJS API.",
      };
    } catch (fallbackError: any) {
      return {
        success: false,
        message: fallbackError?.message || "Network error while sending email.",
      };
    }
  }
}
