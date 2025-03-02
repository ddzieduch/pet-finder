// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { Pets } from 'path/to/interfaces';

export interface PetsResponse {
  animals: Pets[];
  pagination: Pagination;
};

export interface Pets {
  id: number;
  organization_id: string;
  url: string;
  type: string;
  species: string;
  breeds: Breeds;
  colors: Colors;
  age: string;
  gender: string;
  size: string;
  coat: string | null;
  attributes: Attributes;
  environment: Environment;
  tags: string[];
  name: string;
  description: string;
  organization_animal_id: string;
  photos: Photo[];
  primary_photo_cropped: Photo | null;
  videos: Video[];
  status: string;
  status_changed_at: string; // ISO Date String
  published_at: string; // ISO Date String
  distance: number | null;
  contact: Contact;
  _links: AnimalLinks;
};

interface Breeds {
  primary: string;
  secondary: string | null;
  mixed: boolean;
  unknown: boolean;
};

interface Colors {
  primary: string | null;
  secondary: string | null;
  tertiary: string | null;
};

interface Attributes {
  spayed_neutered: boolean;
  house_trained: boolean;
  declawed: boolean | null;
  special_needs: boolean;
  shots_current: boolean;
};

interface Environment {
  children: boolean | null;
  dogs: boolean | null;
  cats: boolean | null;
};

interface Photo {
  small: string;
  medium: string;
  large: string;
  full: string;
};

interface Video {
  url: string;
};

interface Contact {
  email: string;
  phone: string;
  address: Address;
};

interface Address {
  address1: string;
  address2: string | null;
  city: string;
  state: string;
  postcode: string;
  country: string;
};

interface AnimalLinks {
  self: Link;
  type: Link;
  organization: Link;
};

interface Pagination {
  count_per_page: number;
  total_count: number;
  current_page: number;
  total_pages: number;
  _links: PaginationLinks;
};

interface PaginationLinks {
  previous?: Link;
  next?: Link;
};

interface Link {
  href: string;
};
