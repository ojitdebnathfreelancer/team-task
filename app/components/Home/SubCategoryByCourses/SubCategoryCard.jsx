import axios from "axios";
import SubCategoryCardSlider from "./SubCategoryCardSlider";

const SubCategoryCard = async ({ category }) => {
  const subCategories = await axios(
    "https://easy-learning-platform.vercel.app/api/v1/sub-categories"
  );

  const subCatagories = subCategories?.data?.data?.data.filter(
    (cat) => cat?.category_id._id === category._id
  );

  return (
    <>
      {subCatagories?.length > 0 && (
        <div className="border border-green-600 p-2 rounded">
          <h1 className="text-xl font-bold text-center mb-2">
            {category?.title}
          </h1>
          <div>
            <SubCategoryCardSlider subCatagories={subCatagories} />
          </div>
        </div>
      )}
    </>
  );
};

export default SubCategoryCard;
