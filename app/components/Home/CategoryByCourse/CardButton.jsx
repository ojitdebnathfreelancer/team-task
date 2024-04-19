"use client";
import Link from "next/link";

const CardButton = ({ category, type }) => {
  const redirectPath =
    type === "main"
      ? `/category/${category._id}`
      : `/course/sub/${category._id}`;
  return (
    <Link
      href={redirectPath}
      className="bg-green-600 text-white px-3 py-1 rounded-md font-medium text-lg"
    >
      Courses
    </Link>
  );
};

export default CardButton;
