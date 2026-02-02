import { useParams, Link } from "react-router-dom";
import { useMovie } from "../hooks/useMovie";
import { Button } from "@mui/material";

export default function MovieDetails() {
  const { id } = useParams();
  const { data, isLoading } = useMovie(id);

  if (isLoading)
    return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>

      <p className="text-gray-700 mb-6 leading-relaxed">
        {data.body}
      </p>

      <Link to="/movies">
        <Button variant="outlined">← Back to movies</Button>
      </Link>
    </div>
  );
}
