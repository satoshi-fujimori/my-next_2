import Link from "next/link";
import BookDetails from "./BookDetails";

export default function LinkedBookDetails({ index, book }) {
  console.log(book);
  console.log(book.id);
  return (
    <Link href={`/edit/${book.id}`}>
      <div className="hover:bg-green-50">
        <BookDetails index={index} book={book} />
      </div>
    </Link>
  );
}
