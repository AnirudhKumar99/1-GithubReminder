import nodemailer from "nodemailer";
import cron from "node-cron";
import 'dotenv/config'

const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user:process.env.SENDER_EMAIL,
    pass:process.env.SENDER_PASSWORD
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

  mailer.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("Error sending email...", err.message);
    } else {
      console.log("Email sent:", info.response);
    }
  });
};
sendReminderEmail();
// Reminder (every day at 9:00 AM)
// cron.schedule("5 0 * * *", () => {
//   sendReminderEmail();
//   console.log("Reminder email sent.");
// });
