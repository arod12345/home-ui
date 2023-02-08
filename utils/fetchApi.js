import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '3cbe69720emsh8b58b57b4c57846p16cdb6jsnc80f396b07de',
    },
  });
  return data;
}
