import axios from "axios";
import BookCard from "../components/Books/BookCard";

const Books = async () => {
  const books = await axios(
    "https://easy-learning-platform.vercel.app/api/v1/books?limit=9"
  );

  // console.log(books?.data?.data);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-3 my-5 gap-10">
      {books?.data?.data?.data.map((book) => (
        <BookCard key={book?._id} book={book} />
      ))}
    </div>
  );
};

export default Books;
