import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center  text-white">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="flex-shrink object-contain" alt="" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
