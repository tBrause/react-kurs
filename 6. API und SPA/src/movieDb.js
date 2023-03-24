import axios from 'redaxios';

export const fetchMovieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  /* Diese default-Parameter werden mit den Parametern zusammengefügt, die
bei der Verwendung von fetchMovieDb ggf. verwendet werden. Hier also nur
Werte eintragen, die für alle Anfragen gelten sollen, z.B. Sprache oder
API-Key.  */
  params: {
    // api_key: 'dc0d5906c8879733492f327bf341f831',
    language: 'de',
  },
  /* Alternativ kann die Authorisierung auch mit einem Header-Eintrag und einem
  dafür vorgesehenen API-Key erfolgen, bei Version 4 der API ist das Pflicht.
  Header sind Teil des HTTP-Protokolls, es handelt sich um Schlüssel-Wert-Paare,
  die als Text bei jeder Anfrage und Antwort mitgesendet werden. */
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzBkNTkwNmM4ODc5NzMzNDkyZjMyN2JmMzQxZjgzMSIsInN1YiI6IjViMmY3NzlmMGUwYTI2NTU3NDAwMzhiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9j3uIcskUfH9eFnjOO3mueIsKhZ_SjDyFn8C0IDv3OY`,
  },
});

export const imageConfig = {
  base_url: 'http://image.tmdb.org/t/p/',
  secure_base_url: 'https://image.tmdb.org/t/p/',
  backdrop_sizes: ['w300', 'w780', 'w1280', 'original'],
  logo_sizes: ['w45', 'w92', 'w154', 'w185', 'w300', 'w500', 'original'],
  poster_sizes: ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original'],
  profile_sizes: ['w45', 'w185', 'h632', 'original'],
  still_sizes: ['w92', 'w185', 'w300', 'original'],
};

export const imageBase = imageConfig.secure_base_url;
