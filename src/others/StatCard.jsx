import * as React from "react";

export function StatCard({ number, title, description }) {
  return (
    <article className="flex flex-col min-w-[240px] w-[306px]">
      <h3 className="text-2xl font-bold     dark:text-gray-200  text-gray-100">{number}</h3>
      <h4 className="text-lg font-semibold     dark:text-gray-200  text-gray-200 mt-7">{title}</h4>
      <p className="text-sm leading-6     dark:text-gray-200  text-gray-200 mt-7 text-opacity-80">
        {description}
      </p>
    </article>
  );
}
