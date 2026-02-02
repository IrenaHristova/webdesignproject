import MovieCard from "../components/MovieCard";
import { useMovies } from "../hooks/useMovies";

export default function Movies() {
  const { data, isLoading } = useMovies();

  if (isLoading)
    return <p className="text-center mt-10">Loading movies...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Popular Movies
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.slice(0, 12).map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
