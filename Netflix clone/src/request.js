const API_KEY = "7ddf7b51b294d0bb3bd8bd93c898cbe8";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovie: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTopRatedTv: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchDocumantaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchActionTv: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetchCrimeTv: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
  fetchAnimationTv: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
  fetchMysteryTv: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  fetchScifiTv: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
  fetchLatestMovie: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchLatestTv: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
  fetchPopularMovie:`/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchPopularTv:`/tv/popular?api_key=${API_KEY}&language=en-US`
}

export default request;