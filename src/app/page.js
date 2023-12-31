import { getAllReviews } from "@/lib/getter";
import LinkedBookDetails from "@/components/LinkedBookDetails";

export const dynamic = "force-dynamic";
export default async function Home() {
  const reviews = await getAllReviews();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {reviews.map((b, i) => (
        <LinkedBookDetails book={b} index={i + 1} key={b.id} />
      ))}
    </div>
  );
}
