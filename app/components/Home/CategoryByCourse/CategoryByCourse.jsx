import axios from "axios";
import CategoryCard from "./CategoryCard";

const CategoryByCourse = async () => {
  const categories = await axios(
    "https://easy-learning-platform.vercel.app/api/v1/categories"
  );

  return (
    <div className="max-w-7xl mx-auto xl:px-0 px-3 my-5">
      <h2 className="font-bold text-xl mb-3">
        Select By Your Preferred Category:
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
        {categories.data.data.map((category) => (
          <CategoryCard key={category?._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryByCourse;
