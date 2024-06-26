import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-shadow1 p-2 rounded-md hover:shadow-shadow2 duration-300 flex md:flex-row flex-col gap-x-3 md:gap-y-0 gap-y-4">
      <Image
        src={book?.cover_page}
        width={500}
        height={500}
        priority
        alt="book"
        className="h-56 w-44 object-cover mx-auto"
      />
      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="font-bold text-lg">{book?.title}</h2>
          {book?.writer && <p>Writer: {book?.writer}</p>}
          <p>Course: {book?.course_id?.[0].title}</p>
          <p className="font-medium">Discount Price: ${book?.discount_price}</p>
          <p className="font-medium">Price: ${book?.price}</p>
        </div>
        <div className="flex justify-center w-full md:mt-0 mt-2">
          <Link
            href={`/book/${book?._id}`}
            className="bg-green-600 px-3 py-1 rounded text-white font-semibold inline-block"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
