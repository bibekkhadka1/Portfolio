const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// Configure nodemailer transporter with Gmail SMTP & app password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kbibek300@gmail.com',           // your gmail address
    pass: 'gakd oahe fkcu hacn',     // your Gmail App Password (from Step 1.2)
  },
});

// POST endpoint to receive form data and send email
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: 'Please fill all fields' });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`,           // sender info (user who submitted form)
    to: 'kbibek300@gmail.com',               // your gmail to receive messages
    subject: `New message from ${name}`,
    text: `You have a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ msg: 'Error sending email' });
    }
    res.status(200).json({ msg: 'Email sent successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
