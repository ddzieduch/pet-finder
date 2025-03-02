import { PetsResponse } from '../interfaces';
import { TypesResponse } from '../interfaces/types';

const PETFINDER_API_URL = process.env.PETFINDER_API_URL;
const CLIENT_ID = process.env.PETFINDER_CLIENT_ID;
const CLIENT_SECRET = process.env.PETFINDER_CLIENT_SECRET;

const fetchToken = async (): Promise<string> => {
  const response = await fetch(`https://api.petfinder.com/v2/oauth2/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });

  const data = await response.json();
  return data.access_token;
};

export const fetchPets = async (): Promise<PetsResponse> => {
  const accessToken = await fetchToken();

  const response = await fetch(`${PETFINDER_API_URL}/animals`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.json();
};

export const fetchTypes = async (): Promise<TypesResponse> => {
  const access_token = await fetchToken();

  const response = await fetch(`${PETFINDER_API_URL}/types`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  return response.json();
};
