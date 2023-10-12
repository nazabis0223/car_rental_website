'use client';

import { useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

import type { LatLngExpression } from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export function MapView() {
  const searchParams = useSearchParams();
  const mapRef = useRef();

  const DEFAULT_LAT = 51.505;
  const DEFAULT_LNG = -0.09;
  const DEFAULT_ZOOM_LEVEL = 13;

  const center: LatLngExpression = {
    lat: Number(searchParams.get('lat')) || DEFAULT_LAT,
    lng: Number(searchParams.get('lng')) || DEFAULT_LNG,
  };
  const zoom: number = Number(searchParams.get('zoom')) || DEFAULT_ZOOM_LEVEL;

  function UpdateMapPosition() {
    const map = useMap();

    useEffect(() => {
      if (searchParams.has('lat') && searchParams.has('lng')) {
        const center: LatLngExpression = {
          lat: Number(searchParams.get('lat')),
          lng: Number(searchParams.get('lng')),
        };
        map.setView(center, map.getZoom());
      }
    }, [searchParams]);

    return null;
  }

  return (
    <MapContainer
      className="h-[var(--map-container-height)]"
      center={center}
      zoom={zoom}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <UpdateMapPosition />
    </MapContainer>
  );
}