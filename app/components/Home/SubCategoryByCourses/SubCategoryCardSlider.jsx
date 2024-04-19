"use client";
import Slider from "react-slick";
import CategoryCard from "../CategoryByCourse/CategoryCard";

const SubCategoryCardSlider = ({ subCatagories }) => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {subCatagories.length > 2 ? (
        <Slider {...settings}>
          {subCatagories.map((cat) => (
            <CategoryCard key={cat?._id} category={cat} />
          ))}
        </Slider>
      ) : (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
          {subCatagories.map((cat) => (
            <CategoryCard key={cat?._id} category={cat} />
          ))}
        </div>
      )}
    </>
  );
};

export default SubCategoryCardSlider;
