import axios from "axios";
import BookCard from "../Books/BookCard";
import Link from "next/link";

const AllBooks = async () => {
  const books = await axios(
    `https://easy-learning-platform.vercel.app/api/v1/books?limit=3&page=${1}`
  );

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex md:flex-row flex-col justify-between items-center mb-5 gap-y-2">
        <h2 className="text-center font-bold text-xl">All Books</h2>
        <Link
          href="/books"
          className="bg-green-600 px-3 py-1 rounded-md text-white font-semibold"
        >
          View All
        </Link>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-10 xl:px-0 px-3">
        {books?.data?.data?.data.map((book) => (
          <BookCard key={book?._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
