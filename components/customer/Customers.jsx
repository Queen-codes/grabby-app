import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { CustomerOrder } from '../../data/CustomersData';
import {createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button'

const theme = createTheme({
  typography: {
    fontFamily: 'Barlow, san-serif'
  },
})


export default function DataTable() {
    const[data, setData] = useState(CustomerOrder)
    const columns = [
      
      {
        field: "customer name",
        headerName: "Customer Name",
        width: 150,
        renderCell: (params) => {
          return (
            <div className="flex items-center gap-3">
              <Image src={params.row.avatar} alt="Customer Pictue" width='30' height='30'/>
                {params.row.name}
            </div>
          );
        },
      },
      { field: 'customerId', headerName: 'Customer ID', width: 90 },
      { field: 'lastOrdered', headerName: 'Last Ordered', width: 90 },
      { field: 'spent', headerName: 'Spent', width: 90 },
      { field: 'email', headerName: 'Email', width: 200 },
      { field: 'phone', headerName: 'Phone', width: 200 },
      { field: 'status', headerName: 'Status', width: 120 },
    ];
      
return (
  <>
    <div className="mb-8 mt-5 ml-4">
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Inactive</Button>
    </div>

    <ThemeProvider theme={theme}>
      <div className='hidden lg:block' style={{height: 400, width: '90%'} }>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          sx={{color: '#495683'}}
          className='dark:text-gray-100'
          />
    </div>
    </ThemeProvider>

  </>
);
}
