import Link from 'next/link';
import SiteDirectory from '@/components/site-directory';

export default function SitesPage() {
  return <main className="min-h-screen bg-stone-50 px-4 py-12"><div className="mx-auto max-w-7xl"><Link href="/" className="text-sm font-bold text-amber-700">← العودة للرئيسية</Link><div className="mb-8 mt-6"><p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">الدليل</p><h1 className="mt-2 text-4xl font-black text-slate-900">كل المواقع التاريخية</h1><p className="mt-3 max-w-2xl leading-8 text-slate-600">استعرض المعالم المتوفرة، ابحث حسب الاسم أو المحافظة، ثم افتح صفحة الموقع لمعرفة قصته وإحداثياته.</p></div><SiteDirectory /></div></main>;
}
