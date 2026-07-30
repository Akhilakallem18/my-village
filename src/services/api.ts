import type { Place, Village } from "../types/village";

const BASE_URL = "http://127.0.0.1:8000/api";


async function apiRequest<T>(url: string): Promise<T> {

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}`);
  }

  return response.json();

}



export function getPlaces(): Promise<Place[]> {

  return apiRequest<Place[]>(
    `${BASE_URL}/places/`
  );

}



export function getVillage(): Promise<Village[]> {

  return apiRequest<Village[]>(
    `${BASE_URL}/village/`
  );

}



export function getGallery() {

  return apiRequest(
    `${BASE_URL}/gallery/`
  );

}
export async function getEvents() {
  const response = await fetch(`${BASE_URL}/events/`);

  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }

  return response.json();
}