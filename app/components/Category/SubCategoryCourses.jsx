"use client";
import Slider from "react-slick";
import CourseCard from "../Home/CourseCard";
import { useEffect, useState } from "react";
import axios from "axios";

const SubCategoryCourses = ({ category }) => {
  const [courses, setCourses] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const courses = await axios(
        `https://easy-learning-platform.vercel.app/api/v1/courses?sub_category_id=${category._id}`
      );

      setCourses(courses);
    };

    fetchData();
  }, [category]);

  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
      {courses?.data?.data?.data.length > 0 ? (
        <div className="max-w-7xl mx-auto xl:px-0 px-3">
          {courses?.data?.data?.data.length > 3 ? (
            <div>
              <h1 className="font-bold text-xl my-5">{`${category?.category_id?.title} - ${category?.title}`}</h1>
              <Slider {...settings}>
                {courses?.data?.data?.data.map((course) => (
                  <CourseCard key={course?._id} course={course} />
                ))}
              </Slider>
            </div>
          ) : (
            <div>
              <h1 className="font-bold text-xl my-5">{`${category?.category_id?.title} - ${category?.title}`}</h1>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
                {courses?.data?.data?.data.map((course) => (
                  <CourseCard key={course?._id} course={course} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SubCategoryCourses;
