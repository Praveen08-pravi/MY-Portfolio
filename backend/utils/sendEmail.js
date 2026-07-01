const sendEmail = async ({ to, subject, html }) => {
  if (!to) {
    throw new Error("Recipient email (to) is missing");
  }

  await axios.post(
    "https://api.brevo.com/v3/smtp/email",
    {
      sender: {
        name: "Praveen Portfolio",
        email: "praveenupraveenu98@gmail.com",
      },
      to: [{ email: to }],
      subject,
      htmlContent: html,
    },
    {
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  console.log("Email sent via Brevo API");
};