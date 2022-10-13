import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
function createData(id, date, name, item, amount, status) {
  return { id, date, name, item, amount, status };
}

const rows = [
  createData('#451926', '8/10/22', 'Justin Momoh', 'Iphone 13', 'N350,000', 'Pending'),
  createData('#457926', '8/10/22', 'Justin Momoh', 'Iphone 13', 'N350,000', 'Delivered'),
  createData('#452926', '8/10/22', 'Justin Momoh', 'Iphone 13', 'N350,000', 'Canclled'),
  
];

export default function RecentOrders() {

  function handleColor(status) {
    if(status === 'Delivered') {
        return{
            color: '#03670B'
        }
    }else if(status === 'Pending') {
        return {
            color: '#774B66'
        }
    }else{
        return {
            color: '#A71D1D'
        }
    }
}
  return (

    <section>
      <div className='xl:grid grid-cols-54 gap-4'>
       <section>
          <div className='flex justify-between mb-3'>
          <h3 className='font-bold text-blue-card text-xl  dark:text-white tracking-wide'>Recent Orders</h3>
          <Link href="/orders">
              <a className='ml-auto text-black tracking-wide hover:text-sky-500'> See all orders</a>
          </Link>
          </div>

    <TableContainer component={Paper} sx={{color: '#495683'}} className='dark:text-white dark:bg-black'>
      <Table sx={{ minWidth: 350}} aria-label="simple table" className='dark:text-slate-100' >
        <TableHead>
          <TableRow>
            <TableCell className='dark:text-white'>Order ID</TableCell>
            <TableCell align="left" className='dark:text-white'>Date</TableCell>
            <TableCell align="left" className='dark:text-white'>Customer Name</TableCell>
            <TableCell align="left" className='dark:text-white'>Item</TableCell>
            <TableCell align="left" className='dark:text-white'>Amount</TableCell>
            <TableCell align="left" className='dark:text-white'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='dark:text-white'>
                {row.id}
              </TableCell>
              <TableCell align="left" className='dark:text-white'>{row.date}</TableCell>
              <TableCell align="left" className='dark:text-white'>{row.name}</TableCell>
              <TableCell align="left" className='dark:text-white'>{row.item}</TableCell>
              <TableCell align="left" className='dark:text-white'>{row.amount}</TableCell>
              <TableCell align="left">
                <span style={handleColor(row.status)}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</section>

    <section className='h-52 mt-10 bg-slate-100 rounded-3xl dark:bg-black'>
        <div className='bg-blue-card -rotate-12 h-32 rounded-3xl p-4 translate-y-14 w-4/5'>
            <h3 className='text-white font-bold text-lg tracking-wide'>Sales report</h3>
            <p className='text-sm text-slate-300 pt-5'>May 1- May 27, 2020</p>
            <p className='text-white font-bold text-base pt-3'>N350,0000,0000</p>
        </div>
    </section>

    </div>

    </section>
  );
}
