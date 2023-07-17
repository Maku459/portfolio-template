import Link from "next/link";
import Image from "next/image";

export default function Card({
  key,
  title,
  imageSrc,
}: {
  key: string;
  title: string;
  imageSrc: string;
}) {
  return (
    <Link key={key} href={`/works/${key}`}>
      <div className="bg-white px-5 pt-5 pb-5 rounded-lg">
        <Image
          alt=""
          src={imageSrc}
          height={300}
          width={400}
          className="w-full object-cover mb-5"
        />
        <h2 className="text-[1.5rem]">{title}</h2>
      </div>
    </Link>
  );
}
