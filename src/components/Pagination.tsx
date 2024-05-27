"use client";
import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";

interface IProps {
  totalData: number;
  dataPerPage: number;
  currentPage: number;
  urlPath: string;
}

const Pagination = ({
  totalData,
  dataPerPage,
  urlPath,
  currentPage,
}: IProps) => {
  const router = useRouter();
  const pageCount = Math.ceil(totalData / dataPerPage);

  const handlePageClick = (event: { selected: number }) => {
    const selectedPage = event.selected;

    router.push(`${urlPath}&page=${selectedPage + 1}`);
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      forcePage={currentPage - 1}
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      containerClassName={"pagination"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
      breakLinkClassName={"page-link"}
      activeClassName={"active"}
    />
  );
};

export default Pagination;
