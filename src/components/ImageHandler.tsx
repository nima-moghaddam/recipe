"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import foodBg from "../../public/overlay/404-notfound.jpg";
import { Images } from "@/types/Recipe-Interface";

interface ImageHandler {
  image: string;
  images: Images;
}

const ImageHandler = ({ image, images }: ImageHandler) => {
  const [imgHasErr, setImgHasErr] = useState(false);

  return (
    <Image
      alt="image"
      fill
      sizes="100vw"
      src={imgHasErr ? foodBg : images?.LARGE?.url || image || foodBg}
      style={{ objectFit: "cover" }}
      onError={(e) => {
        if (e) setImgHasErr(true);
      }}
    />
  );
};

export default ImageHandler;
