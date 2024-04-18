import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const SingleCourse = async ({ params: { id } }) => {
  const course = await axios(
    `https://easy-learning-platform.vercel.app/api/v1/books/${id}`
  );
  const book = course?.data?.data;

  return (
    <div className="max-w-4xl lg:mx-auto mx-3 bg-white shadow-shadow1 p-2 rounded-md hover:shadow-shadow2 duration-300 flex md:flex-row flex-col gap-x-3 md:gap-y-0 gap-y-4 mt-5">
      <Image
        src={book?.cover_page}
        width={500}
        height={500}
        priority
        alt="book"
        className="h-auto w-auto max-w-[60%] object-cover mx-auto"
      />
      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="font-bold text-lg">{book?.title}</h2>
          {book?.writer && <p>Writer: {book?.writer}</p>}
          <p>Price: {book?.price}</p>
          <p>Discount Price: {book?.discount_price}</p>

          <p className="font-medium">{book?.description}</p>
        </div>
        <div className="flex justify-center w-full md:mt-0 mt-2">
          <Link
            href="/"
            className="bg-green-600 px-3 py-1 rounded text-white font-semibold inline-block"
          >
            Download PDF
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
