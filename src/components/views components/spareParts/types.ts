// src/components/views components/spareParts/types.ts
export type SparePart = {
  id: string;
  nummer: string;
  bezeichnung: string;
  type: string;
  imageUrl?: string;
  lagerort: string;
  lagerstand: string;
  listenpreis: string;
  einkaufspreis: string;
  produktgruppe?: string;
  etLieferanten?: string;
  lieferant?: string;
  herstellernummer?: string;
};
