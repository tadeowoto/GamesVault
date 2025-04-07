const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export async function fetchGameApi() {
  return fetch(`${API_URL}${API_KEY}`)
    .then((res) => res.json())
    .then((data) => data.results);
}
