import Image from "next/image";

const ImageContainer = ({ src, alt }) => {
  return (
    <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-28 h-28 relative overflow-hidden mt-5 md:h-28 md:w-28">
      <Image src={src} alt={alt} />
    </div>
  );
};

export default ImageContainer;
