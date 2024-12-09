export default function TrendingNews({ images }) {
    return (
      <div className="flex flex-col self-stretch my-auto text-3xl leading-none font-[415] text-neutral-800 max-md:mt-10">
        <div className="self-start">Trending News</div>
        {images.map((item) => (
          <img
            key={item.id}
            loading="lazy"
            src={item.image}
            alt={item.alt}
            className="object-contain mt-4 w-full rounded-md aspect-[1.56]"
          />
        ))}
      </div>
    );
  }