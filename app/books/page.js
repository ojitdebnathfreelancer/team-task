import axios from "axios";
import BookCard from "../components/Books/BookCard";
import Pagination from "../components/Books/Pagination";

const Books = async ({ searchParams }) => {
  const books = await axios(
    `https://easy-learning-platform.vercel.app/api/v1/books?limit=9&page=${searchParams?.page}`
  );

  return (
    <div className="max-w-7xl mx-auto my-5">
      <Pagination total={books?.data?.data.meta.total} />
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5 gap-10 xl:px-0 px-3">
        {books?.data?.data?.data.map((book) => (
          <BookCard key={book?._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
