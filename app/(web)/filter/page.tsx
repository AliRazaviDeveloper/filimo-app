"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { genres, ratings } from "@/app/data";
import { MovieCard, SelectFelidFilter, Typography } from "@/components";
import { useEffect } from "react";
import useMovieFilter from "@/app/hooks/useMoveFilter";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialCategories = searchParams.get("categories")?.split(",") || [];
  const initialRating = searchParams.get("rating") || "";

  const {
    selectedCategories,
    selectedRating,
    setSelectedCategories,
    setSelectedRating,
    filterAndSortData,
  } = useMovieFilter(initialCategories, [initialRating]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedCategories.length)
      params.set("categories", selectedCategories.join(","));
    if (selectedRating) params.set("rating", selectedRating[0]);

    router.push(`?${params.toString()}`, { scroll: false });
  }, [selectedCategories, selectedRating, router]);

  return (
    <div className="flex flex-col gap-y-6">
      <section className="flex flex-row gap-x-2 items-center max-w-screen-md mx-auto w-full">
        <SelectFelidFilter
          title="ژانر"
          options={genres}
          row
          type="checkbox"
          selectedOptions={selectedCategories}
          setSelectedOptions={setSelectedCategories}
        />
        <SelectFelidFilter
          title="امتیاز فیلم"
          options={ratings}
          type="radio"
          selectedOptions={selectedRating}
          setSelectedOptions={setSelectedRating}
        />
      </section>

      <section>
        <Typography
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          color="text-slate-200"
          textAlign="center"
        >
          لیست تمامی فیلم و سریال‌ها
        </Typography>
        <div className="grid grid-cols-12 gap-3 mb-9 mt-3">
          {filterAndSortData.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.movie_title}
              image={movie.pic.movie_img_b}
              rating={movie.rate_avrage}
              categories={movie.categories}
              avg_rate_label={movie.avg_rate_label}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
