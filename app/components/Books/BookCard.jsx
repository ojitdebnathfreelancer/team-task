import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-shadow1 p-2 rounded-md hover:shadow-shadow2 duration-300 flex gap-x-3">
      <Image
        src={book?.cover_page}
        width={500}
        height={500}
        priority
        alt="book"
        className="h-56 w-44 object-cover"
      />
      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="font-bold text-lg">{book?.title}</h2>
          {book?.writer && <p>Writer: {book?.writer}</p>}
          <p>Course: {book?.course_id?.[0].title}</p>
          <p className="font-medium">Discount Price: ${book?.discount_price}</p>
          <p className="font-medium">Price: ${book?.price}</p>
        </div>
        <div className="flex justify-center w-full">
          <Link
            href={book?.pdf_link}
            className="bg-green-600 px-3 py-1 rounded text-white font-semibold inline-block"
          >
            Download PDF
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
