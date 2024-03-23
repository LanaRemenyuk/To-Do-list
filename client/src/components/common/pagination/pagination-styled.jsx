import Pagination from "@mui/material/Pagination";
import { Box, styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { slice } from "lodash";

const Component = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledPagination = styled(Pagination)(() => ({
  "& .MuiPaginationItem-root": {
    color: "white",
    borderColor: "white"
  },
  "& .Mui-selected": {
    backgroundColor: "white !important",
    color: "black !important"
  }
}));

const PaginationStyled = ({
  elements,
  elemPerPage,
  elementsPerPage,
  currentPage,
  setCurrentPage,
  setPaginationSlicedElements
}) => {
  const indexOfLastElement = currentPage * elementsPerPage;
  const indexOfFirstElement = indexOfLastElement - elementsPerPage;
  const paginationSlicedElements = slice(
    elements,
    indexOfFirstElement,
    indexOfLastElement
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(
    () => setPaginationSlicedElements(paginationSlicedElements),
    [elements, elemPerPage, elementsPerPage, currentPage]
  );
  return (
    elements?.length > elementsPerPage && (
      <Component>
        <Stack spacing={2}>
          {elements?.length > 0 && (
            <StyledPagination
              count={Math.ceil(elements?.length / elemPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          )}
        </Stack>
      </Component>
    )
  );
};

export default PaginationStyled;
