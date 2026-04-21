import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Esqueleto para notificación futura por email
    // Ejemplo: usando Resend API para notificarte cuando ella abrá el enlace
    // const body = await request.json();
    
    // if (!process.env.RESEND_API_KEY) {
    //   console.log("No Resend API Key found. Skipping notification.");
    //   return NextResponse.json({ success: true, dummy: true });
    // }

    // Aquí iría el código de Resend
    // await resend.emails.send({ ... });

    return NextResponse.json({ success: true, message: "Notificación desactivada por ahora" });
  } catch (error) {
    console.error("Error en notify:", error);
    return NextResponse.json({ error: "Error enviando notificación" }, { status: 500 });
  }
}
