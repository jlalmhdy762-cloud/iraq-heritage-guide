"use client";

import { useState } from 'react';

const suggestions = ['ما أفضل رحلة لمدة يومين؟', 'ترجم لي قصة بابل إلى الإنجليزية', 'ما آداب زيارة المواقع الأثرية؟'];

export default function HeritageAssistant() {
  const [message, setMessage] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  async function ask(question = message) {
    if (!question.trim()) return;
    setMessage(question);
    setLoading(true);
    setAnswer('');
    try {
      const response = await fetch('/api/assistant', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: question, language: document.documentElement.lang }) });
      const data = await response.json();
      setAnswer(data.answer || data.error || 'تعذر الحصول على إجابة حالياً.');
    } catch {
      setAnswer('تعذر الاتصال بالمساعد. تأكد من إعداد OPENAI_API_KEY عند تشغيل المشروع.');
    } finally { setLoading(false); }
  }

  return (
    <section className="rounded-[2rem] bg-gradient-to-br from-emerald-950 to-stone-900 p-6 text-white shadow-soft md:p-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
        <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">رفيقك الثقافي</p><h2 className="mt-2 text-3xl font-black">اسأل الذكاء الاصطناعي عن العراق</h2><p className="mt-3 max-w-2xl leading-7 text-stone-300">اسأل عن المواقع، خطط الرحلات، الترجمة، العادات، أو اقترح برنامجاً ثقافياً بلغتك.</p></div>
        <span className="rounded-full border border-emerald-700 bg-emerald-900/50 px-3 py-2 text-xs font-bold text-emerald-200">يدعم اللغات العالمية</span>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">{suggestions.map((item) => <button key={item} onClick={() => ask(item)} className="rounded-full border border-stone-700 px-3 py-2 text-xs text-stone-200 transition hover:border-amber-400 hover:text-amber-200">{item}</button>)}</div>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row"><input value={message} onChange={(event) => setMessage(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && ask()} placeholder="اكتب سؤالك هنا..." className="min-h-12 flex-1 rounded-2xl border border-stone-700 bg-stone-800 px-4 text-sm text-white outline-none placeholder:text-stone-400 focus:border-amber-400" /><button onClick={() => ask()} disabled={loading} className="rounded-2xl bg-amber-500 px-6 py-3 text-sm font-black text-stone-950 hover:bg-amber-400 disabled:opacity-60">{loading ? 'يفكر...' : 'اسأل المساعد'}</button></div>
      {answer && <div className="mt-5 whitespace-pre-wrap rounded-2xl border border-stone-700 bg-stone-800/80 p-5 text-sm leading-8 text-stone-100">{answer}</div>}
    </section>
  );
}
