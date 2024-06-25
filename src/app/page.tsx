import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.url} alt="" className="" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
