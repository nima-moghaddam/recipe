import { Images } from "@/types/Recipe-Interface";
import Image from "next/image";
import foodBg from "../../../public/overlay/404-notfound.jpg";
import ImageHandler from "@/components/ImageHandler";

interface IProps {
  image: string;
  images: Images;
}

const ImageSection = ({ images, image }: IProps) => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <ImageHandler image={image} images={images} />
    </div>
  );
};

export default ImageSection;
