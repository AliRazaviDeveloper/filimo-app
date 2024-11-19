import { MovieCard, Typography } from "@/components";
import data from "@/data";
const Page = () => {
  return (
    <div className="flex flex-col gap-y-6">
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
          {data.map((movie) => (
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
