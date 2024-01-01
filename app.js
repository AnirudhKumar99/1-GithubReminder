import nodemailer from "nodemailer";
import cron from "node-cron";

const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "projectmailer42@gmail.com",
    pass: "Github@99",
  },
});

const sendReminderEmail = () => {
  console.log("Sending Email");
  const mailOptions = {
    from: "projectmailer42@gmail.com",
    to: "flaashketchum@gmail.com",
    subject: "Reminder: Github",
    text: "Don't forget to commit to github",
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending email...", err.message);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};

// Reminder (every day at 9:00 AM)
cron.schedule("0 17 * * *", () => {
  sendReminderEmail();
  console.log("Reminder email sent.");
});
