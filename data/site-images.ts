import type { Site } from '@/data/heritage';

const images: Record<string, string> = {
  ur: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1200&q=85',
  babylon: 'https://images.unsplash.com/photo-1590845947676-fa2576f401d2?auto=format&fit=crop&w=1200&q=85',
  nineveh: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?auto=format&fit=crop&w=1200&q=85',
  hadr: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85',
  nimrud: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85',
  ashur: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1200&q=85',
  samarra: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85',
  ctesiphon: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=85',
  akkarkuf: 'https://images.unsplash.com/photo-1564769625392-651b2f8f3f85?auto=format&fit=crop&w=1200&q=85',
  'al-ukhaidir': 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=85'
};

export function siteImage(site: Pick<Site, 'slug'>) { return images[site.slug] || images.babylon; }
