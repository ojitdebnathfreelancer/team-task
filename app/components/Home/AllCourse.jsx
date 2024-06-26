"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import Slider from "react-slick";

const AllCourse = () => {
  const [courses, setCourses] = useState({});

  const fetchData = async () => {
    try {
      const courses = await axios.get(
        "https://easy-learning-platform.vercel.app/api/v1/courses?limit=20"
      );
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
    <div className="max-w-7xl mx-auto xl:px-0 px-3 my-10">
      <h2 className="text-center font-bold text-xl mb-5">All Courses</h2>
      {courses?.data?.data?.data?.length > 0 && (
        <Slider {...settings}>
          {courses?.data?.data?.data?.map((course) => (
            <CourseCard key={course?._id} course={course} />
          ))}
        </Slider>
      )}
    </div>
  );
};

export default AllCourse;
