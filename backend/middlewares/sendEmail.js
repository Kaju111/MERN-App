const nodemailer = require("nodemailer");

exports.sendEmail = async (options) => {
  var transporter = nodemailer.createTransport({
    // host: process.env.SMPT_HOST,
    // port: process.env.SMPT_PORT,
    // auth: {
    //   user: process.env.SMPT_MAIL,
    //   pass: process.env.SMPT_PASSWORD,
    // },
    // service: process.env.SMPT_SERVICE,

    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d10840d29a0774",
      pass: "61b59a621165c5",
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
