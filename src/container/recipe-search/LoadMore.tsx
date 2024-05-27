"use client";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface IProps {
  searchParams: { query: string; page: number };
  showBtn: boolean;
}

const LoadMore = ({ searchParams, showBtn }: IProps) => {
  const router = useRouter();
  const btnRef = useRef<HTMLDivElement>(null);

  const handleLoadMore = () => {
    router.push(
      `/recipe?query=${searchParams.query}&page=${searchParams.page + 4}`,
    );

    if (btnRef.current) {
      setTimeout(() => {
        if (btnRef.current) {
          btnRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      }, 500);
    }
  };

  return (
    <>
      {showBtn && (
        <div className="my-5 flex w-full items-center justify-center">
          <Button name="Load more" onClick={handleLoadMore} />
        </div>
      )}
      <div ref={btnRef}></div>
    </>
  );
};

export default LoadMore;
