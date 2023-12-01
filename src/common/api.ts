import axios from "axios";

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
})

export const rickAndMortyApi = {
  getCharacters() {
    return instance.get<ICharacter>('character')
  }
}

export interface ICharacter {
  info: ICharactersInfo;
  results: ICharacter[];
}

interface ICharactersInfo {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  },
  location: {
    name: string;
    url: string;
  },
  image: string;
  url: string;
  created: string;
}