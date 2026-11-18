import resend from "../config/resend.js";

const sendContactEmail = async (req,res) => {
    try {
        const {name, email, subject, message} = req.body;

        if(!name || !email || !subject || !message){
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const {data, error} = await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: process.env.MY_EMAIL,
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,

            text: `
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}`
        });

        if(error) {
            console.log(error);

            return res.status(500).json({
                message: "Email could not be sent"
            });
        }

        return res.status(200).json({
            message: "Message sent Successfully",
            emailId: data.id
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export default sendContactEmail;