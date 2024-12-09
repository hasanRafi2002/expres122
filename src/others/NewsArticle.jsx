export default function NewsArticle({ author, date, title, excerpt }) {
    return (
      <>
        <div className="text-xs font-medium leading-none text-neutral-800 text-opacity-60">{author} - {date}</div>
        <div className="mt-1 text-lg leading-6 font-[415] text-neutral-800">{title}</div>
        <div className="mt-3 text-xs leading-4 text-stone-500">{excerpt}</div>
        <div className="self-stretch w-full h-px mt-8 border border-solid shrink-0 border-slate-300" />
      </>
    );
  }