import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { SupppliersData } from '../../data/SuppliersData';
import { useState } from 'react';
import Image from 'next/image';
import {createTheme, ThemeProvider } from '@mui/material';
import Button from '../Button'

const theme = createTheme({
  typography: {
    fontFamily: 'Barlow, san-serif'
  },
})


export default function DataTable() {
    const[data, setData] = useState(SupppliersData)

    const columns = [

        {
            field: "name",
            headerName: "Company",
            width: 250,
            renderCell: (params) => {
              return (
                <div className="flex items-center gap-3">

                    <Image src={params.row.avatar} alt="Company Logo" width='30' height='30'/>
                  {params.row.name}
                </div>
              );
            },
          },

          { field: 'lastUpdated', headerName: 'Last Updated', width: 120 },

          { field: 'email', headerName: 'Email', width: 200 },
          { field: 'phone', headerName: 'Phone', width: 200 },
          
      ];
      
      

  return (
    <>
       <div className="mb-8 mt-5 ml-4 flex">
        <Button>All</Button>
        <Button>Brand</Button>
      </div>
    
      <ThemeProvider theme={theme}>
          <div className='hidden lg:block' style={{ height: 400, width: '90%', }}>
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
