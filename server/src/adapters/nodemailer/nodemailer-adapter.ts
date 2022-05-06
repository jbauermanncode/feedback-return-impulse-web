import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f19432d9531275",
      pass: "dc255a2dd6e155"
    }
  })

export class NodemailerAdapter implements MailAdapter {

    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Josué <j.bauermann22.08.90@gmail.com>',
        subject,
        html: body
    })
    }

}