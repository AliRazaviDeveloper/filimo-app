import data from "@/data";
import { useMemo, useState } from "react";

const useMovieFilter = (
  initialCategories: string[],
  initialRating: string[]
) => {
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(initialCategories);
  const [selectedRating, setSelectedRating] = useState<string[]>(initialRating);

  const filterAndSortData = useMemo(() => {
    const filteredData = data.filter((movie) => {
      const movieCategories = movie.categories.map((cat) => cat.title_en);
      return selectedCategories.every((cat) => movieCategories.includes(cat));
    });

    return filteredData.sort((a, b) => {
      const ratingA = parseFloat(a.rate_avrage);
      const ratingB = parseFloat(b.rate_avrage);

      if (selectedRating[0] === "more") {
        return ratingB - ratingA;
      } else if (selectedRating[0] === "less") {
        return ratingA - ratingB;
      }
      return 0;
    });
  }, [selectedCategories, selectedRating]);

  return {
    selectedCategories,
    selectedRating,
    setSelectedCategories,
    setSelectedRating,
    filterAndSortData,
  };
};

export default useMovieFilter;
