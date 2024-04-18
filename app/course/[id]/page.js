import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const SingleCourse = async ({ params: { id } }) => {
  const course = await axios(
    `https://easy-learning-platform.vercel.app/api/v1/courses/${id}`
  );

  const book = course?.data?.data;

  console.log(book);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-shadow1 p-2 rounded-md hover:shadow-shadow2 duration-300 flex md:flex-row flex-col gap-x-3 md:gap-y-0 gap-y-4 mt-5">
      <Image
        src={book?.banner}
        width={500}
        height={500}
        priority
        alt="book"
        className="h-auto w-auto max-w-[60%] object-cover mx-auto"
      />
      <div className="flex flex-col justify-between w-full">
        <div>
          <h2 className="font-bold text-lg">{book?.title}</h2>
          {book?.author && <p>Author: {book?.author}</p>}
          {book?.sub_category_id && (
            <>
              <p>Category: {book?.sub_category_id?.title}</p>
              <p>Sub Category: {book?.sub_category_id?.category_id.title}</p>
            </>
          )}
          <p className="font-medium">{book?.description}</p>
        </div>
        <div className="flex justify-center w-full md:mt-0 mt-2">
          <Link
            href="/"
            className="bg-green-600 px-3 py-1 rounded text-white font-semibold inline-block"
          >
            See Syllabus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
