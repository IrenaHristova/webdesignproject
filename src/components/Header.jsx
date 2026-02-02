import { AppBar, Toolbar, Typography } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar className="flex gap-2">
        <MovieIcon />
        <Typography variant="h6">
          Movie Explorer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
