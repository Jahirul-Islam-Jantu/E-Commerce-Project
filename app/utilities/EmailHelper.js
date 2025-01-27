import nodemailer from "nodemailer";
export const EmailSend = async (EmailTo, EmailSubject, EmailText) => {
  nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: {
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: { rejectUnauthorized: false },
  });

  const mailOption = {
    from: "MERN E-Commerce Solutions <info@teamrabbil.com>", // Use a verified sender address
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  return await transport.sendMail(mailOption);
};
