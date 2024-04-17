import axios from "axios";
import Link from "next/link";
import SubCategory from "./SubCategory";

const NavList = async () => {
  const categories = await axios(
    "https://easy-learning-platform.vercel.app/api/v1/categories"
  );

  return (
    <ul className="flex gap-x-10">
      <li className="relative main-link-item">
        <Link className="leading-[64px] block" href="/">
          Courses
        </Link>
        {/* course categories menu starts  */}
        {categories?.data?.data.length > 0 && (
          <ul
            className={`min-link-items-categories absolute top-[100%] hidden left-0 bg-green-600 py-2 px-5 min-w-32 rounded-sm flex-col gap-y-2 duration-500`}
          >
            {categories?.data?.data.map((category) => (
              <li key={categories?._id} className="relative category-link">
                <Link href="/" className="text-nowrap">
                  {category?.title}
                </Link>
                {/* course sub categories menu starts  */}
                <SubCategory id={category?._id} />
                {/* course sub categories menu ends  */}
              </li>
            ))}
          </ul>
        )}
        {/*course categories menu ends  */}
      </li>

      <li>
        <Link href="/books" className="leading-[64px] block">
          Books
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
