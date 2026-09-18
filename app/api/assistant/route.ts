import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message, language = 'ar' } = await request.json();
  if (!message || typeof message !== 'string') return NextResponse.json({ error: 'يرجى كتابة سؤال.' }, { status: 400 });
  if (!process.env.OPENAI_API_KEY) return NextResponse.json({ answer: 'المساعد جاهز، لكن يحتاج إلى إضافة OPENAI_API_KEY في ملف .env.local قبل تشغيله.' });

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    body: JSON.stringify({ model: process.env.OPENAI_MODEL || 'gpt-4o-mini', temperature: 0.4, messages: [
      { role: 'system', content: `You are a culturally respectful Iraq heritage travel assistant. Answer accurately and concisely in the user's language code: ${language}. Do not invent opening hours, safety information, prices, or historical claims. Say when verification with official authorities is needed. Help create respectful cultural activities for foreign visitors.` },
      { role: 'user', content: message }
    ] })
  });
  if (!response.ok) return NextResponse.json({ error: 'حدث خطأ في خدمة الذكاء الاصطناعي.' }, { status: 502 });
  const data = await response.json();
  return NextResponse.json({ answer: data.choices?.[0]?.message?.content || 'لم تصل إجابة.' });
}
