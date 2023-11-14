import React from 'react'
import './table.scss'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function List() {

    const rows = [
        {
            id:1,
            product: "Acer Nitro 5",
            img: "https://media.materiel.net/r900/products/MN0005694370_1_0005813473_0005834501_0005834549.jpg",
            costomer: "John Smith",
            date: "1 March",
            amount: "785",
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id:2,
            product: "Acer Nitro 5",
            img: "https://media.materiel.net/r900/products/MN0005694370_1_0005813473_0005834501_0005834549.jpg",
            costomer: "John Smith",
            date: "1 March",
            amount: "785",
            method: "Cash on Delivery",
            status: "Pending"
        },
        {
            id:3,
            product: "Acer Nitro 5",
            img: "https://media.materiel.net/r900/products/MN0005694370_1_0005813473_0005834501_0005834549.jpg",
            costomer: "John Smith",
            date: "1 March",
            amount: "785",
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id:4,
            product: "Acer Nitro 5",
            img: "https://media.materiel.net/r900/products/MN0005694370_1_0005813473_0005834501_0005834549.jpg",
            costomer: "John Smith",
            date: "1 March",
            amount: "785",
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id:5,
            product: "Acer Nitro 5",
            img: "https://media.materiel.net/r900/products/MN0005694370_1_0005813473_0005834501_0005834549.jpg",
            costomer: "John Smith",
            date: "1 March",
            amount: "785",
            method: "Cash on Delivery",
            status: "Pending"
        },
        {
            id:6,
            product: "Acer Nitro 5",
            img: "https://media.materiel.net/r900/products/MN0005694370_1_0005813473_0005834501_0005834549.jpg",
            costomer: "John Smith",
            date: "1 March",
            amount: "785",
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id:7,
            product: "Acer Nitro 5",
            img: "https://media.materiel.net/r900/products/MN0005694370_1_0005813473_0005834501_0005834549.jpg",
            costomer: "John Smith",
            date: "1 March",
            amount: "785",
            method: "Cash on Delivery",
            status: "Pending"
        },
        {
            id:8,
            product: "Acer Nitro 5",
            img: "https://media.materiel.net/r900/products/MN0005694370_1_0005813473_0005834501_0005834549.jpg",
            costomer: "John Smith",
            date: "1 March",
            amount: "785",
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id:9,
            product: "Acer Nitro 5",
            img: "https://media.materiel.net/r900/products/MN0005694370_1_0005813473_0005834501_0005834549.jpg",
            costomer: "John Smith",
            date: "1 March",
            amount: "785",
            method: "Cash on Delivery",
            status: "Pending"
        },
        {
            id:10,
            product: "Acer Nitro 5",
            img: "https://media.materiel.net/r900/products/MN0005694370_1_0005813473_0005834501_0005834549.jpg",
            costomer: "John Smith",
            date: "1 March",
            amount: "785",
            method: "Cash on Delivery",
            status: "Approved"
        },
    
      ];
    
  return (
    <TableContainer component={Paper} className='table'>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">product</TableCell>
          <TableCell className="tableCell">Image</TableCell>
          <TableCell className="tableCell">costomer</TableCell>
          <TableCell className="tableCell">date</TableCell>
          <TableCell className="tableCell">amount</TableCell>
          <TableCell className="tableCell">method</TableCell>
          <TableCell className="tableCell">status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell className="tableCell"> {row.id}</TableCell>
            <TableCell className="tableCell">{row.product}</TableCell>
            <TableCell className="tableCell">
                <div className="cellWrapper">
                    <img src={row.img} alt="" className='image'/>
                </div>
            </TableCell>
            <TableCell className="tableCell">{row.costomer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List