import Image from "next/image";

export default function BookDetails({ index, book }) {
  return (
    <div className="flex">
      <div>
        <Image src={book.image} alt="" width={140} height={180} />
      </div>
      <div>
        <ul className="my-1">
          <li>{index && index + "."}</li>
          <li>{book.title}</li>
          <li>{book.author}</li>
          <li>{book.publisher}</li>
          <li>{book.published}</li>
        </ul>
      </div>
    </div>
  );
}
