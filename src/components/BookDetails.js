import Image from "next/image";

export default function BookDetails({ index, book }) {
  return (
    <div className="flex w-full">
      <div>
        <Image src={book.image} alt="" width={140} height={180} />
      </div>
      <div className="flex flex-col text-black ml-4 h-180 ">
        <p className="my-1">
          {index && index + "."}
          {book.title}（{book.author}-{book.publisher}　{book.published}出版）
        </p>
        <p className=" mr-10 p-2 bg-blue-100">{book.memo}</p>
      </div>
    </div>
  );
}
