import FullPageImageView from "~/app/components/full-image-page";
import { getImage } from "~/server/queries";
import { Modal } from "./modal";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid ID");

  const image = await getImage(idAsNumber);
  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
