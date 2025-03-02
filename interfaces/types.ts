export interface TypesResponse {
  types: Types[];
}

export interface Types {
  name: string;
  coats: string[];
  colors: string[];
  genders: Gender[];
  _links: AnimalTypeLinks;
}

type Gender = 'Male' | 'Female' | 'Unknown';

interface AnimalTypeLinks {
  self: Link;
  breeds: Link;
}

interface Link {
  href: string;
}
