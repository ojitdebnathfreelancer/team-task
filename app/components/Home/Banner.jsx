import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <Image
        width={1000}
        height={1000}
        priority
        src="/banner/easy-learning.jpeg"
        alt="banner"
        className="w-full h-auto"
      />
    </div>
  );
};

export default Banner;
