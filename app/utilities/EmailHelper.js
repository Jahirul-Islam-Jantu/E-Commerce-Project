import nodemailer from "nodemailer";

export const EmailSend = async (EmailTo, EmailSubject, EmailText) => {
  try {
    const transport = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // Use true for port 465
      auth: {
        user: process.env.SMTP_USER, // Store in environment variables
        pass: process.env.SMTP_PASS, // Store in environment variables
      },
      family: 4,
    });

    // Verify SMTP connection
    await transport.verify();

    const mailOption = {
      from: `"MERN E-Commerce Solutions" <${process.env.SMTP_USER}>`, // Use the same email as SMTP user
      to: EmailTo,
      subject: EmailSubject,
      text: EmailText,
    };

    // Send email
    const result = await transport.sendMail(mailOption);
    console.log("Email sent:", result.messageId);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
