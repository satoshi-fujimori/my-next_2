import Link from "next/link";

import { Inconsolata } from "next/font/google";
import "./globals.css";

const fnt = Inconsolata({ subsets: ["latin"] });

export const metadata = {
  title: "Reading Recorder",
  description: "Record a review of book",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <h1 className="text-4xl text-indigo-800 font-bold my-2">
          Reading Recorder
        </h1>
        <ul className="flex bg-blue-600 mb-4 pl-2">
          <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link href="/">Home</Link>
          </li>
          <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <Link href="/books">Search</Link>
          </li>
          <li className="block px-4 py-2 my-1 hover:bg-gray-100 rounded">
            <a href="https://wings.msn.to/" target="_blank">
              Support
            </a>
          </li>
        </ul>
        <div className="ml-2">{children}</div>
      </body>
    </html>
  );
}
