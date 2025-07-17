export interface Biome {
  slug: string;
  description: string;
}

export interface EnvironmentalEffect {
  name: string;
  description: string;
}

export interface Planet {
  id: string; // presupunem că ai adăugat unul sau folosești index
  name: string;
  sector: string;
  biome: Biome | null;
  environmentals: EnvironmentalEffect[];
}
