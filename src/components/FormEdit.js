"use client";

import { addReview, removeReview } from "@/lib/actions";

export default function FormEdit({ src: { id, read, memo } }) {
  return (
    <form action={addReview}>
      <input type="hidden" name="id" defaultValue={id} />
      <div className="mb-3">
        <label htmlFor="read" className="font-bold">
          読了日
        </label>
        <input
          className="block bg-gray-100 border-2 
          border-gray-600 rounded focus:bg-white focus:outline-none focus:border-red-500"
          type="date"
          id="read"
          name="read"
          defaultValue={read}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="memo" className="font-bold">
          感想
        </label>
        <textarea
          id="memo"
          name="memo"
          defaultValue={memo}
          rows={3}
          className="block bg-gray-100 border-2 max-w-screen-xl w-3/4
          border-gray-600 rounded focus:bg-white focus:outline-none focus:border-red-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white rounded px-4 py-2 mr-2 hover:bg-blue-500"
      >
        登録
      </button>
      <button
        type="submit"
        formAction={removeReview}
        className="bg-blue-600 text-white rounded px-4 py-2 mr-2 hover:bg-blue-500"
      >
        削除
      </button>
    </form>
  );
}
