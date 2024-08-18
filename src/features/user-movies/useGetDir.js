import { useQuery } from "@tanstack/react-query";
import { getDirPath } from "../../services/apiDir";

export function useGetDir(videoPath) {
  const {
    isLoading,
    data: dirs,
    error,
  } = useQuery({
    queryKey: ["dirs"],
    queryFn: () => {
      if (!videoPath) return "";
      return getDirPath(videoPath);
    },
  });

  return { isLoading, dirs, error };
}
