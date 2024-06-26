import Image from "next/image";
import CardButton from "./CardButton";

const CategoryCard = ({ catTyp = "main", category }) => {
  return (
    <>
      {category && (
        <div className="bg-white shadow-shadow1 hover:shadow-shadow2 duration-300 p-2 flex flex-col justify-between ml-3">
          <div>
            <h1 className="text-center md:text-xl text-lg font-bold mb-1">
              {category?.title}
            </h1>
            <div>
              <Image
                src={category?.icon ?? category?.category_id?.icon}
                width={500}
                height={500}
                priority
                alt="course"
                className="w-60 h-60 object-cover mx-auto"
              />
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <CardButton type={catTyp} category={category} />
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryCard;
