const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

const createContact = async (req, res) => {
  try {
    console.log("CONTACT BODY:", req.body);

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    console.log("EMAIL FIELD:", email);

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // Admin email
    await sendEmail({
      to: process.env.PORTFOLIO_EMAIL,
      subject: "📩 New Portfolio Contact",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // User email
    await sendEmail({
      to: email.trim(),
      subject: "Thank you for contacting me!",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thanks for contacting me. I will reply soon.</p>
        <br/>
        <p>Regards,<br/>Praveen U</p>
      `,
    });

    return res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      contact,
    });

  } catch (error) {
    console.log("ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { createContact };