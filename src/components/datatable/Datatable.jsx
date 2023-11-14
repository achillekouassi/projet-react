import React, { useState } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { useColumn, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';

function Datatable() {
  const [data, setData] = useState(userRows)
  const handleDelete = (id)=> {
    setData(data.filter((item) => item.id !== id))
  }
const actionColumn = [{fiels:"action", headerName:"Action", width:200, renderCell:(params)=>{
  return <div className='cellAction'>
   <Link to="/users/test" style={{textDecoration:"none"}}> 
   <div className='viewButton'>View</div>
   </Link>
    <div className='deleteButton' onClick={() => handleDelete(params.rows.id)}>Delete</div>
  </div>
}}]

  return (
    <div className='database'>
      <div className="datatableTitle">
      Users
      <Link to="/users/new" style={{textDecoration:"none"}} className='link'>Add New</Link>
      </div>
         <DataGrid
         className='datagrid'
        rows={data}
        columns={useColumn.concat(actionColumn)}
        pageSize={5}
        initialState={{
          pagination: {
            paginationModel: {  pageSize: 12 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable