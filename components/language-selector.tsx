"use client";

import { useEffect, useState } from 'react';

const languages = [
  ['ar', 'العربية'], ['en', 'English'], ['fr', 'Français'], ['de', 'Deutsch'], ['es', 'Español'],
  ['tr', 'Türkçe'], ['fa', 'فارسی'], ['ur', 'اردو'], ['zh', '中文'], ['ja', '日本語'], ['ko', '한국어'], ['ru', 'Русский']
] as const;

export default function LanguageSelector() {
  const [language, setLanguage] = useState('ar');

  useEffect(() => {
    const saved = window.localStorage.getItem('heritage-language');
    if (saved) setLanguage(saved);
  }, []);

  function changeLanguage(value: string) {
    setLanguage(value);
    window.localStorage.setItem('heritage-language', value);
    document.documentElement.lang = value;
    document.documentElement.dir = value === 'ar' || value === 'fa' || value === 'ur' ? 'rtl' : 'ltr';
  }

  return (
    <label className="sr-only-focusable flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-2 text-xs font-bold text-slate-700">
      <span aria-hidden="true">🌐</span>
      <span className="sr-only">اختيار اللغة</span>
      <select aria-label="اختيار اللغة" value={language} onChange={(event) => changeLanguage(event.target.value)} className="bg-transparent outline-none">
        {languages.map(([code, name]) => <option key={code} value={code}>{name}</option>)}
      </select>
    </label>
  );
}
