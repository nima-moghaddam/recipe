"use client";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

interface IProps {
  totalData: number;
  dataPerPage: number;
}

const Pagination = ({ totalData, dataPerPage }: IProps) => {
  const pageCount = Math.ceil(totalData / dataPerPage);

  const handlePageClick = () => {};

  return (
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
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
