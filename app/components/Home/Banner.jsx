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
        className="w-full md:h-auto h-40 object-cover"
      />
    </div>
  );
};

export default Banner;
