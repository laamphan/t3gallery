import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid ID");

  const image = await getImage(idAsNumber);
  return (
    <div>
      <img src={image.url} className="w-96" alt="" />
    </div>
  );
}