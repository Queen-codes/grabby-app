import { DataGrid } from '@mui/x-data-grid';
import {createTheme, ThemeProvider } from '@mui/material';
import Button from '../Button'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from  '@fortawesome/free-solid-svg-icons'
import { OrderData } from '../../data/OrderData'
import { useState } from 'react';
const theme = createTheme({
  typography: {
    fontFamily: 'Barlow, san-serif'
  },
})



export default function DataTable() {
  const [data, setData] = useState(OrderData)
  
    const columns = [
      { field: 'id', headerName: 'Order ID', width: 100 },
      { field: 'qunatity', headerName: 'Quantity', width: 70 },
      { field: 'tackingId', headerName: 'Tracking ID', width: 100 },
      { field: 'product', headerName: 'Product Name', width: 150 },
      { field: 'date', headerName: 'Date', width: 90 },
      { field: 'amount', headerName: 'Amount', width: 100 },
      { field: 'sold', headerName: 'Sold', width: 50 },
      { field: 'mode', headerName: 'Mode of Payment', width: 120},
      { field: 'status', headerName: 'Status', width: 100 },
      {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <>
              <Link href={"/user/" + params.row.id}>
                <button className="userListEdit">Edit</button>
              </Link>
              <FontAwesomeIcon icon={faTrash}
                className="ml-4"
                onClick={() => console.log('deleted')}
              />
            </>
          );
        },
      }
    ];
      
  return (
    <>
    <div className="mb-8 mt-5 ml-4 flex">
      <Button>All</Button>
    </div>
    
    <ThemeProvider theme={theme}>
      <div className='hidden lg:block' style={{height: 550, width: '95%',}}>
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        sx={{color: '#495683'}}
        className='dark:text-gray-100'
        />
      </div>
      </ThemeProvider>
    </>
  );
}


