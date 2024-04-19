import axios from "axios";
import SubCategoryCard from "./SubCategoryCard";

const SubCategoryByCourses = async () => {
  const categories = await axios(
    "https://easy-learning-platform.vercel.app/api/v1/categories"
  );

  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-3 my-10">
      <h2 className="font-bold text-xl mb-3">
        Select By Your Preferred Preparation:
      </h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        {categories.data.data.map((category) => (
          <SubCategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default SubCategoryByCourses;
