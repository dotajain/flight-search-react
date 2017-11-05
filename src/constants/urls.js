const API =
  process.env.NODE_ENV === 'production'
    ? 'http://dotajain.com/'
    : 'http://localhost:3004';

export const SEARCH = `${API}/search`;
export const CITIES = `${API}/cities`;
