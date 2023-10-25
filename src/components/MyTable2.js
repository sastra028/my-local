import React,{Component} from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
export class MyTable2 extends Component{
    
render(){
  const columns: GridColDef[] = [
    { 
      field: 'number', 
      headerName: 'เลข', 
      width: 100 
    },
    {
      field: 'price1',
      headerName: 'ราคา',
      width: 100,
      // editable: true,
      type: 'number',
    },
    {
      field: 'price2',
      headerName: 'โตด/กลับ',
      width: 150,
      // editable: true,
      type: 'number',
    },
    {
      field: 'action',
      headerName: 'ดำเนินการ',
      width: 20,
      // editable: true,
    },
  ];
  
  const rows = [
    { id: 1, number: '01', price1: 500, price2: 500, action: 'ลบ' },
    { id: 2, number: '02', price1: 500, price2: 500, action: 'ลบ' },
    { id: 3, number: '03', price1: 500, price2: 500, action: 'ลบ' },
    { id: 4, number: '56', price1: 500, price2: 500, action: 'ลบ' },
    { id: 5, number: '78', price1: 500, price1: 500, action: 'ลบ' },
  ];
  

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        //checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
}