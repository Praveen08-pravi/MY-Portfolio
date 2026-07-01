const axios = require("axios");

const sendEmail = async ({ to, subject, html }) => {
  try {
    if (!to) {
      throw new Error("Recipient email is missing");
    }

    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Praveen Portfolio",
          email: "praveenupraveenu98@gmail.com",
        },
        to: [
          {
            email: to,
          },
        ],
        subject,
        htmlContent: html,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    console.log("✅ Email sent via Brevo API");
  } catch (error) {
    console.error("❌ Email API Error:", error.response?.data || error.message);
    throw error;
  }
};

module.exports = sendEmail;