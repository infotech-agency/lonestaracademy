const transporter = require("../config/mailer");

async function sendAdmissionMail(admission) {
  const { name, email, phone, course, dob, address, message } = admission;

  const html = `
    <h2>New Admission Form Submitted</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Course:</strong> ${course}</p>
    <p><strong>DOB:</strong> ${dob || "-"}</p>
    <p><strong>Address:</strong> ${address || "-"}</p>
    <p><strong>Message:</strong> ${message || "-"}</p>
  `;

  await transporter.sendMail({
    from: `"Lone Star Academy" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_NOTIFY_EMAIL,
    subject: `New Admission: ${name} - ${course}`,
    html,
  });
}

module.exports = sendAdmissionMail;