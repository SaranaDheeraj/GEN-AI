import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// Product component
const Product = ({ data }) => {
  return (
    <TableContainer
      component={Paper}
      style={{
        width: "82%",
        margin: "20px auto",
        maxHeight: 400,
        overflow: "auto",
      }}
    >
      <h2 style={{ padding: "10px 0", textAlign: "center" }}>Products Data</h2>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell>Client Name</StyledTableCell>
            <StyledTableCell>Project Start Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((product) => (
            <StyledTableRow key={product.name}>
              <StyledTableCell component="th" scope="row">
                {product.name}
              </StyledTableCell>
              <StyledTableCell>{product.clientName}</StyledTableCell>
              <StyledTableCell>{product.startDate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Product;
