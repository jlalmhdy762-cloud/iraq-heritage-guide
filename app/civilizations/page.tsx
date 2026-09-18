import Link from 'next/link';
import { civilizations, sites } from '@/data/heritage';

export default function CivilizationsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">الحضارات</p>
        <h1 className="mt-2 text-4xl font-black text-slate-900">رحلة عبر حضارات العراق</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {civilizations.map((civilization) => {
          const civilizationSites = sites.filter((site) => site.civilization === civilization.name);

          return (
            <article key={civilization.slug} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-soft">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">{civilization.period}</div>
              <h2 className="mt-4 text-3xl font-black text-slate-900">{civilization.name}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{civilization.summary}</p>

              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {civilizationSites.slice(0, 3).map((site) => (
                  <li key={site.slug} className="flex items-center justify-between gap-4 border-b border-stone-200 pb-2">
                    <span>{site.name}</span>
                    <Link href={`/sites/${site.slug}`} className="font-bold text-amber-700">
                      تفاصيل
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </main>
  );
}
