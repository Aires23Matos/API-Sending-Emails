import transporter from "../config/transporter";

class SendEmail {
  async Send (req, res){
    const { to, subject, text, html } = req.body;
  
    // Configuração do email
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
        html, // Opcional: corpo em HTML
    };
  
    try {
        // Enviar email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao enviar email.' });
    }
  }
} 

export default new SendEmail();
