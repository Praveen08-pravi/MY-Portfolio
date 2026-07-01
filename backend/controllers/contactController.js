const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

const createContact = async (req, res) => {
  try {
    console.log("CONTACT BODY:", req.body);

    const { name, email, subject, message } = req.body;

    // 🔴 Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    // 🔴 Extra email safety check (IMPORTANT)
    if (!email || typeof email !== "string") {
      return res.status(400).json({
        success: false,
        message: "Invalid email",
      });
    }

    console.log("EMAIL FIELD:", email);

    // Save to DB
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // 📩 Send email to admin
    await sendEmail({
      to: process.env.PORTFOLIO_EMAIL, // IMPORTANT
      subject: "📩 New Portfolio Contact",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 📩 Send confirmation email to user
    await sendEmail({
      to: email?.trim(), // IMPORTANT FIX
      subject: "Thank you for contacting me!",
      html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting me through my portfolio.</p>

        <p>I have received your message and will get back to you soon.</p>

        <br>

        <p>Regards,</p>
        <h3>Praveen U</h3>
        <p>Full Stack Developer</p>
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