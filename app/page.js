import AllCourse from "./components/Home/AllCourse";
import Banner from "./components/Home/Banner";
import CategoryByCourse from "./components/Home/CategoryByCourse/CategoryByCourse";

export default function Home() {
  return (
    <>
      <Banner />
      <AllCourse />
      <CategoryByCourse />
    </>
  );
}
