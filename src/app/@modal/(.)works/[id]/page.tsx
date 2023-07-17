import CardDetail from "../../../works/components/CardDetail/CardDetail";
import Modal from "../../../works/components/Modal/Modal";
import swagData, { Work } from "../../../data";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: Work = swagData.find((p) => p.id === id)!;

  return (
    <Modal>
      <CardDetail data={data} />
    </Modal>
  );
}
