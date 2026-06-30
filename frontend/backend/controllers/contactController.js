const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");

const createContact = async (req, res) => {
  try {
    console.log(req.body);

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    // Send email notification to admin
    await sendEmail({
      to: process.env.EMAIL_USER,
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

    // Send confirmation email to visitor
    await sendEmail({
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <h2>Hello ${name},</h2>

        <p>Thank you for contacting me through my portfolio.</p>

        <p>I have received your message and will get back to you as soon as possible.</p>

        <br>

        <p>Regards,</p>

        <h3>Praveen U</h3>

        <p>Full Stack Developer</p>
      `,
    });

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      contact,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createContact,
};