import Link from 'next/link';
import { featuredSites, civilizations, stats } from '@/data/heritage';
import HeritageMap from '@/components/heritage-map';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">Iraq Heritage</p>
            <h1 className="text-2xl font-black text-slate-900">دليل حضارات العراق</h1>
          </div>
          <nav className="flex items-center gap-4 text-sm font-medium text-slate-700">
            <Link href="/" className="hover:text-amber-700">الرئيسية</Link>
            <Link href="/civilizations" className="hover:text-amber-700">الحضارات</Link>
            <a href="#sites" className="hover:text-amber-700">المواقع</a>
            <a href="#map" className="hover:text-amber-700">الخريطة</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-stone-100 via-amber-50 to-emerald-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="mb-4 inline-block rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
              تراث حضاري غني
            </span>
            <h2 className="max-w-xl text-4xl font-black leading-tight text-slate-900 md:text-5xl">
              استكشف قصص العراق عبر حضاراته ومواقعها الأثرية المذهلة.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
              اكتشف كيف ازدهرت المدن والمدنيسون في العراق، من السومرية إلى العباسية، مع نبذة موجزة عن كل حضارة
              وموقع جغرافي قابل للزيارة ضمن خريطة تفاعلية.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#sites"
                className="rounded-full bg-amber-600 px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-amber-500"
              >
                استعرض المواقع
              </a>
              <Link
                href="/civilizations"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                اكتشف الحضارات
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
                  <div className="text-3xl font-black text-amber-700">{item.value}</div>
                  <div className="mt-2 text-sm font-medium text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16" id="map">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">الخريطة</p>
          <h3 className="mt-2 text-3xl font-black text-slate-900">مواقع العراق على الخريطة</h3>
        </div>
        <HeritageMap sites={featuredSites} />
      </section>

      <section className="bg-white py-16" id="sites">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">المواقع</p>
              <h3 className="mt-2 text-3xl font-black text-slate-900">المعالم الرئيسية القابلة للزيارة</h3>
            </div>
            <Link href="/civilizations" className="text-sm font-bold text-amber-700 hover:text-amber-800">
              رؤية كل الحضارات →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredSites.map((site) => (
              <article key={site.slug} className="overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 shadow-soft">
                <div className="h-48 bg-gradient-to-br from-amber-100 via-stone-100 to-emerald-100 p-6">
                  <div className="flex h-full items-end justify-between">
                    <span className="rounded-full border border-amber-200 bg-white/80 px-3 py-1 text-xs font-bold text-amber-800">
                      {site.category}
                    </span>
                    <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white">
                      {site.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-semibold text-amber-700">{site.city}</div>
                  <h4 className="text-2xl font-black text-slate-900">{site.name}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{site.summary}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{site.civilization}</span>
                    <Link href={`/sites/${site.slug}`} className="text-sm font-bold text-amber-700 hover:text-amber-800">
                      تفاصيل الموقع →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-900 py-16 text-stone-100">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">الحضارات</p>
            <h3 className="mt-2 text-3xl font-black">الحضارات التي خلّفت بصمة في العراق</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {civilizations.map((civilization) => (
              <div key={civilization.slug} className="rounded-3xl border border-stone-700 bg-stone-800 p-6">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">{civilization.period}</div>
                <h4 className="mt-4 text-2xl font-black text-white">{civilization.name}</h4>
                <p className="mt-3 text-sm leading-7 text-stone-300">{civilization.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
