const axios = require("axios");

const sendEmail = async ({ to, subject, html }) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Praveen Portfolio",
          email: "praveenupraveenu98@gmail.com", // must be verified in Brevo
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
        timeout: 10000, // 🔥 prevents hanging requests
      }
    );

    console.log("✅ Email sent via Brevo API");
    return response.data;
  } catch (error) {
    console.error(
      "❌ Email API Error:",
      error.response?.data || error.message
    );

    // 🔥 IMPORTANT: return clean error instead of crashing server
    return null;
  }
};

module.exports = sendEmail;