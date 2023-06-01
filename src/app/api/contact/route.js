
import { NextResponse } from 'next/server';
import parseBody from '../../middlewares/parseBody';
import nodemailer from 'nodemailer';

export async function POST(req, res){
  const data = await req.json()
  const nome = data.nome
  const email = data.email
  const telefone = data.telefone

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
      user:process.env.EMAIL_USER,
      pass:process.env.EMAIL_PASSWORD
    },
    tls:{
      rejectUnauthorized: false
    }
  });

  try{
    await transporter.sendMail({
      from:process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject:`Mensagem de ${nome}`,
      text: `Nome: ${nome}, Email: ${email}, Telefone: ${telefone}`
    })
      return NextResponse.json({ message: 'Email enviado com sucesso!' });

  }catch(e){
    
        return NextResponse.json({ error: e });
    
  }
}

POST.middlewares = [parseBody];