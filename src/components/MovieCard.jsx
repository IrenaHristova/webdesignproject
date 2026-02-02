import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@mui/material";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.body.slice(0, 80)}...
        </Typography>
      </CardContent>

      <CardActions>
        <Link to={`/movies/${movie.id}`}>
          <Button size="small" variant="contained">
            View details
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
