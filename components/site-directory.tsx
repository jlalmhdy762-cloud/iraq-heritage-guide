"use client";

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { sites } from '@/data/heritage';

export default function SiteDirectory() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('الكل');
  const categories = ['الكل', ...Array.from(new Set(sites.map((site) => site.civilization)))];
  const filtered = useMemo(() => sites.filter((site) => {
    const text = `${site.name} ${site.city} ${site.civilization} ${site.summary}`;
    return text.includes(query.trim()) && (filter === 'الكل' || site.civilization === filter);
  }), [query, filter]);

  return (
    <>
      <div className="rounded-3xl border border-stone-200 bg-white p-5 shadow-soft">
        <div className="grid gap-4 md:grid-cols-[1fr_auto]">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث باسم الموقع أو المحافظة..." className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none ring-amber-200 focus:ring-2" />
          <select value={filter} onChange={(event) => setFilter(event.target.value)} className="rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none ring-amber-200 focus:ring-2">{categories.map((category) => <option key={category} value={category}>{category}</option>)}</select>
        </div>
      </div>
      <p className="mt-6 text-sm text-slate-600">تم العثور على {filtered.length} موقع</p>
      <div className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((site) => <article key={site.slug} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-soft"><div className="flex items-start justify-between gap-3"><span className="text-sm font-bold text-amber-700">{site.city}</span><span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">{site.status}</span></div><h2 className="mt-4 text-2xl font-black">{site.name}</h2><p className="mt-2 text-xs font-bold text-slate-500">{site.civilization} · {site.category}</p><p className="mt-4 text-sm leading-7 text-slate-700">{site.summary}</p><Link href={`/sites/${site.slug}`} className="mt-5 inline-flex text-sm font-bold text-amber-700">اقرأ التفاصيل →</Link></article>)}
      </div>
      {filtered.length === 0 && <div className="mt-6 rounded-3xl bg-amber-50 p-8 text-center text-slate-700">لا توجد نتائج مطابقة لبحثك.</div>}
    </>
  );
}
