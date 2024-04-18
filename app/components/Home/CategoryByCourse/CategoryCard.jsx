import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white shadow-shadow1 hover:shadow-shadow2 duration-300 p-2 flex flex-col justify-between ml-3">
      <div>
        <h1 className="text-center md:text-xl text-lg font-bold mb-1">
          {category?.title}
        </h1>
        <div>
          <Image
            src={category?.icon}
            width={500}
            height={500}
            priority
            alt="course"
            className="w-60 h-60 object-cover mx-auto"
          />
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <Link
          href={`/category/${category._id}`}
          className="bg-green-600 text-white px-3 py-1 rounded-md font-medium text-lg"
        >
          Buy Courses
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
