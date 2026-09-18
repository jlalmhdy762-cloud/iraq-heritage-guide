"use client";

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { Icon } from 'leaflet';
import { Site } from '@/data/heritage';

const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function HeritageMap({ sites }: { sites: Site[] }) {
  const center: LatLngExpression = [33.3152, 44.3661];

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white p-4 shadow-soft">
      <MapContainer center={center} zoom={6} scrollWheelZoom={true} className="h-[440px] w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {sites.map((site) => (
          <Marker key={site.slug} position={site.coordinates as LatLngExpression} icon={customIcon}>
            <Popup>
              <div className="text-sm">
                <div className="font-black text-slate-900">{site.name}</div>
                <div className="text-xs text-slate-600">{site.city}</div>
                <div className="mt-1 text-xs font-bold text-amber-700">{site.civilization}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
