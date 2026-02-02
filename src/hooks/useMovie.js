import { useQuery } from "@tanstack/react-query";
import { api } from "../api/axios";

export const useMovie = (id) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: async () => {
      const res = await api.get(`/posts/${id}`);
      return res.data;
    },
  });
};