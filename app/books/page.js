import axios from "axios";
import BookCard from "../components/Books/BookCard";

const Books = async () => {
  const books = await axios(
    "https://easy-learning-platform.vercel.app/api/v1/books?limit=9"
  );

  // console.log(books?.data?.data);

  return (
    <div className="max-w-7xl mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 my-5 gap-10 xl:px-0 px-3">
      {books?.data?.data?.data.map((book) => (
        <BookCard key={book?._id} book={book} />
      ))}
    </div>
  );
};

export default Books;
