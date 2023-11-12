import LinkedBookDetails from "@/components/LinkedBookDetails";
import { getBooksByKeyword } from "@/lib/getter";

export default async function BookResult({ params: { keyword = "React" } }) {
  const books = await getBooksByKeyword(keyword);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {books.map((b, i) => (
        <LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </div>
  );
}
