import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

export const useMovies = () => {
  return useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await api.get("/posts");
      return res.data;
    },
  });
};