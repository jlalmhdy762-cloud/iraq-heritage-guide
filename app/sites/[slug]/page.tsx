import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { sites } from '@/data/heritage';
import { siteImage } from '@/data/site-images';
import GoogleMapPanel from '@/components/google-map-panel';

export function generateStaticParams() { return sites.map((site) => ({ slug: site.slug })); }

export default function SitePage({ params }: { params: { slug: string } }) {
  const site = sites.find((item) => item.slug === params.slug);
  if (!site) notFound();
  return <main className="mx-auto max-w-6xl px-4 py-12"><Link href="/sites" className="mb-6 inline-flex text-sm font-bold text-amber-700">← العودة إلى دليل المواقع</Link><article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft"><div className="relative h-72 md:h-96"><Image src={siteImage(site)} alt={`صورة ${site.name}`} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 1200px" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" /><div className="absolute bottom-7 right-7 text-white"><div className="mb-3 flex flex-wrap gap-2"><span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-stone-950">{site.category}</span><span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold">{site.status}</span></div><h1 className="text-4xl font-black">{site.name}</h1><div className="mt-2 text-sm">{site.city} · {site.civilization}</div></div></div><div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr]"><div><h2 className="text-2xl font-black">نبذة تاريخية</h2><p className="mt-4 leading-8 text-slate-700">{site.story}</p><h2 className="mt-8 text-2xl font-black">لماذا هذا الموقع مهم؟</h2><ul className="mt-4 space-y-3 leading-8 text-slate-700">{site.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500" />{highlight}</li>)}</ul></div><aside className="space-y-5"><div className="rounded-3xl border border-stone-200 bg-stone-50 p-6"><h3 className="text-xl font-black">معلومات الزيارة</h3><dl className="mt-5 space-y-3 text-sm text-slate-700"><div className="flex justify-between gap-3 border-b border-stone-200 pb-2"><dt>المحافظة</dt><dd className="font-bold">{site.city}</dd></div><div className="flex justify-between gap-3 border-b border-stone-200 pb-2"><dt>الفترة</dt><dd className="font-bold">{site.period}</dd></div><div className="flex justify-between gap-3 border-b border-stone-200 pb-2"><dt>الإحداثيات</dt><dd className="font-bold">{site.coordinates.join(', ')}</dd></div></dl></div><GoogleMapPanel site={site} /></aside></div></article></main>;
}
