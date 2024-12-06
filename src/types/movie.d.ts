export interface Movie {
  id: number;
  title: string;
  korean_title: string;
  poster_path: string;
  director: string;
  overview: string;
  release_date: string;
  vote_average: number;
  is_bookmarked: boolean;
}

export interface MovieListResponse {
  total_pages: number;
  total_items: number;
  page: number;
  movies: Movie[];
}