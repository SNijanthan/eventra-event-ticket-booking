require("dotenv").config();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.USER_PASS,
  },
});

exports.sendOtpMail = async (email, otp, type) => {
  try {
    const mailOptions = {
      from: process.env.USER_MAIL,
      to: email,
      subject: "Your OTP code",
      text: `Your OTP code is ${otp}`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`OTP ${otp} send to mail ${email}, Type ${type}`);
  } catch (error) {
    console.log(error.message);
  }
};

esports.sendEventBookingMail = async (email, otp, type) => {};
