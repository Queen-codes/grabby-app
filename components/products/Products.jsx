import Button from '../Button'
import { DataGrid } from '@mui/x-data-grid';
import {createTheme,  ThemeProvider } from '@mui/material';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash} from  '@fortawesome/free-solid-svg-icons'
import {Productdata} from '../../data/Productdata'
import { useState } from 'react';
const theme = createTheme({
  typography: {
    fontFamily: 'Barlow, san-serif'
  },
  
})

function Products() {
  const [data, setData] = useState(Productdata)
  const columns = [
    { field: 'id', headerName: 'Product ID', width: 100 },
    { field: 'category', headerName: 'Category', width: 90 },
    { field: 'brand', headerName: 'Brand', width: 100 },
    { field: 'phoneName', headerName: 'Name', width: 150 },
    { field: 'stock', headerName: 'Stock', width: 90 },
    { field: 'amount', headerName: 'Amount', width: 100 },
    { field: 'sold', headerName: 'Sold', width: 50 },
    { field: 'revenue', headerName: 'Revenue', width: 200},
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
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    }

];

  return (
    <main>
    <h2>Products</h2>

    <div className="mb-11 mt-5">
        <Button>All</Button>
        <Button>Category</Button>
        <Button>Status</Button>
        <Button>
          <Link href='/newproduct'>Add New</Link>
      </Button>
    </div>

    <ThemeProvider theme={theme}>
    <div className='hidden lg:block' style={{height: 550, width: '98%'} }>
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
    

    
    </main>
  )
}

export default Products