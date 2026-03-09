import { CityData, cityData } from '../data/cityData';

function getDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  return Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(lng2 - lng1, 2));
}

export function getNearbyCities(currentCity: CityData, count = 6): CityData[] {
  return cityData
    .filter((c) => c.slug !== currentCity.slug)
    .map((c) => ({ city: c, dist: getDistance(currentCity.lat, currentCity.lng, c.lat, c.lng) }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, count)
    .map((item) => item.city);
}
