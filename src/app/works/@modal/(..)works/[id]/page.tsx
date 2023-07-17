import data from "@/app/data";
import CardDetail from "../../../components/CardDetail/CardDetail";
import Modal from "../../../components/Modal/Modal";
import swagData, { Work } from "../../../../data";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const data: Work = swagData.find((p) => p.id === photoId)!;

  return (
    <Modal>
      <CardDetail data={data} />
    </Modal>
  );
}
