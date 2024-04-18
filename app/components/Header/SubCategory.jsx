import axios from "axios";
import Link from "next/link";

const SubCategory = async ({ id }) => {
  const subCategories = await axios(
    "https://easy-learning-platform.vercel.app/api/v1/sub-categories"
  );

  const subCatagories = subCategories?.data?.data?.data.filter(
    (cat) => cat?.category_id._id === id
  );

  return (
    <>
      {subCatagories.length > 0 && (
        <ul
          className={`sub-category-link absolute top-[0%] left-[100%] hidden bg-green-600 py-2 px-5 min-w-32 rounded-sm flex-col gap-y-2 duration-500`}
        >
          {subCatagories.map((category) => (
            <li key={category._id}>
              <Link
                href={`/course/sub/${category?._id}`}
                className="text-nowrap"
              >
                {category?.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SubCategory;
