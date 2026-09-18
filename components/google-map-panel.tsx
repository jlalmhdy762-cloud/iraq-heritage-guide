"use client";

import { useMemo, useState } from 'react';
import type { Site } from '@/data/heritage';

export default function GoogleMapPanel({ site }: { site: Site }) {
  const [mode, setMode] = useState<'map' | 'directions'>('map');
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const query = encodeURIComponent(`${site.name}, ${site.city}, Iraq`);
  const src = useMemo(() => apiKey ? `https://www.google.com/maps/embed/v1/${mode}?key=${apiKey}&${mode === 'map' ? `q=${query}` : `origin=Current+Location&destination=${query}`}` : `https://www.google.com/maps?q=${site.coordinates[0]},${site.coordinates[1]}&output=embed`, [apiKey, mode, query, site]);

  return <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-soft"><div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 p-4"><h3 className="font-black">الخريطة والوصول</h3><div className="flex gap-2"><button onClick={() => setMode('map')} className={`rounded-full px-3 py-2 text-xs font-bold ${mode === 'map' ? 'bg-amber-600 text-white' : 'bg-stone-100 text-slate-700'}`}>الموقع</button><button onClick={() => setMode('directions')} className={`rounded-full px-3 py-2 text-xs font-bold ${mode === 'directions' ? 'bg-amber-600 text-white' : 'bg-stone-100 text-slate-700'}`}>الاتجاهات</button></div></div><iframe title={`خريطة ${site.name}`} src={src} className="h-72 w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={`https://www.google.com/maps/dir/?api=1&destination=${site.coordinates[0]},${site.coordinates[1]}`} target="_blank" rel="noreferrer" className="m-4 inline-flex rounded-full bg-emerald-700 px-4 py-2 text-xs font-bold text-white">فتح الاتجاهات في Google Maps ↗</a></div>;
}
