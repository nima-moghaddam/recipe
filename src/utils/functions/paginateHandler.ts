interface IParameters<ArrayType> {
  dataPerPage: number;
  page: number;
  list: ArrayType[];
}

export const paginateHandler = <ArrayType>({
  dataPerPage,
  page,
  list,
}: IParameters<ArrayType>): ArrayType[] => {
  const startIndex = page === 1 ? 0 : (page - 1) * dataPerPage;
  const endIndex = (page - 1) * dataPerPage + dataPerPage;

  const paginatedList = list.slice(startIndex, endIndex);

  return paginatedList;
};
