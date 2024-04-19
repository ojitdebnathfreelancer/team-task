import AllBooks from "./components/Home/AllBooks";
import AllCourse from "./components/Home/AllCourse";
import Banner from "./components/Home/Banner";
import CategoryByCourse from "./components/Home/CategoryByCourse/CategoryByCourse";
import SubCategoryByCourses from "./components/Home/SubCategoryByCourses/SubCategoryByCourses";

export default function Home() {
  return (
    <>
      <Banner />
      <AllCourse />
      <CategoryByCourse />
      <SubCategoryByCourses />
      <AllBooks />
    </>
  );
}
