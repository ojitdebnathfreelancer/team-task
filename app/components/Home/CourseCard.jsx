import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white shadow-shadow1 hover:shadow-shadow2 duration-300 p-2 flex flex-col justify-between ml-3">
      <div>
        <h1 className="text-center md:text-xl text-lg font-bold mb-1">
          {course?.title}
        </h1>
        <div>
          <Image
            src={course?.banner}
            width={500}
            height={500}
            priority
            alt="course"
            className="w-60 h-60 object-contain mx-auto"
          />
        </div>
        <p className="font-medium mt-1">Author: {course?.author}</p>
        <p className="font-medium mt-1">
          Description:{" "}
          {course?.description?.length > 20
            ? `${course?.description?.slice(0, 20)}...`
            : course?.description}
        </p>
      </div>
      <div className="flex justify-center mt-2">
        <Link
          href={`/course/${course?._id}`}
          className="bg-green-600 text-white px-3 py-1 rounded-md font-medium text-lg"
        >
          Buy Course
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
