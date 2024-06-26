import Pagination from "@/app/components/Books/Pagination";
import CourseCard from "@/app/components/Home/CourseCard";
import axios from "axios";

const page = async ({ params: { id }, searchParams: { page } }) => {
  const courses = await axios(
    `https://easy-learning-platform.vercel.app/api/v1/courses?sub_category_id=${id}&limit=9&page=${page}`
  );

  return (
    <>
      {courses?.data?.data?.data?.length > 0 ? (
        <div className="max-w-7xl mx-auto xl:px-0 px-3 my-5">
          <div className="flex justify-between my-5">
            <h1 className="font-bold text-xl">Courses</h1>
            <Pagination total={courses.data.data.meta.total} />
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-3 gap-5">
            {courses?.data?.data.data.map((course) => (
              <CourseCard key={course?._id} course={course} />
            ))}
          </div>
        </div>
      ) : (
        <div className="min-h-[90vh] flex justify-center items-center">
          <p className="text-center font-bold text-xl">Course Not Available</p>
        </div>
      )}
    </>
  );
};

export default page;
