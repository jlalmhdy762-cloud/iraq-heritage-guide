import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sites } from '@/data/heritage';

export function generateStaticParams() {
  return sites.map((site) => ({ slug: site.slug }));
}

export default function SitePage({ params }: { params: { slug: string } }) {
  const site = sites.find((item) => item.slug === params.slug);

  if (!site) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex text-sm font-bold text-amber-700">
        ← العودة للرئيسية
      </Link>

      <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-soft">
        <div className="bg-gradient-to-r from-amber-100 via-stone-100 to-emerald-100 p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs font-bold text-amber-800">
              {site.category}
            </span>
            <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
              {site.status}
            </span>
          </div>
          <h1 className="mt-6 text-4xl font-black text-slate-900">{site.name}</h1>
          <div className="mt-3 text-sm font-bold text-slate-700">{site.city} • {site.civilization}</div>
        </div>

        <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <section>
              <h2 className="text-2xl font-black text-slate-900">نبذة تاريخية</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">{site.story}</p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-black text-slate-900">لماذا هذا الموقع مهم؟</h2>
              <ul className="mt-4 space-y-3 text-base leading-8 text-slate-700">
                {site.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6">
            <h3 className="text-xl font-black text-slate-900">معلومات أساسية</h3>

            <div className="mt-5 space-y-4 text-sm text-slate-700">
              <div className="flex justify-between gap-4 border-b border-stone-200 pb-2">
                <span>المحافظة</span>
                <strong>{site.city}</strong>
              </div>
              <div className="flex justify-between gap-4 border-b border-stone-200 pb-2">
                <span>الإحداثيات</span>
                <strong>{site.coordinates[0]}, {site.coordinates[1]}</strong>
              </div>
              <div className="flex justify-between gap-4 border-b border-stone-200 pb-2">
                <span>الحالة</span>
                <strong>{site.status}</strong>
              </div>
              <div className="flex justify-between gap-4 border-b border-stone-200 pb-2">
                <span>الفترة</span>
                <strong>{site.period}</strong>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={`https://www.google.com/maps?q=${site.coordinates[0]},${site.coordinates[1]}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full justify-center rounded-full bg-amber-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-amber-500"
              >
                فتح في خرائط Google
              </a>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
