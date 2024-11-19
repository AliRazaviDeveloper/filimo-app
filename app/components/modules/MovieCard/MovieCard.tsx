import Image from "next/image";

type MovieCardProps = {
  id: string;
  title: string;
  image: string;
  rating: string;
  categories: {
    title_en: string;
    title: string;
    link_type: string;
    link_key: string;
  }[];
  avg_rate_label: string;
};

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  image,
  rating,
  categories,
  avg_rate_label,
}) => {
  return (
    <div
      key={id}
      className="col-span-6 md:col-span-4 lg:col-span-2 relative overflow-hidden rounded-md"
    >
      <div className="group relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-md">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/80 flex flex-col justify-end px-2 pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/60 rounded-full p-2 group-hover:opacity-100 opacity-80 transition-opacity duration-300 w-16 mb-1">
            <button
              aria-label="Like"
              className="text-white text-sm flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4"
              >
                <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
              </svg>

              <span className="text-xs">{avg_rate_label}</span>
            </button>
          </div>
          <h2 className="text-sm text-slate-200 font-bold">{title}</h2>
          <p className="text-sm text-gray-400 mt-2">
            {categories.map((category) => (
              <span key={category.title_en}> {category.title} </span>
            ))}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between px-2">
        <span className="text-sm font-light text-slate-200 truncate">
          {title}
        </span>
        <span className="text-xs bg-slate-700 rounded-3xl text-slate-100 px-2 py-1">
          امتیاز: {rating}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
