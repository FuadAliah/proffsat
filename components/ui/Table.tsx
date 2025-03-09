"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface DataGridProps<T> {
  columns: GridColDef[];
  rows: T[];
  loading?: boolean;
  pageSize: number;
}

export default function Table<T extends { id: string | number }>({
  columns,
  rows,
  loading = false,
  pageSize = 10,
}: DataGridProps<T>) {
  return (
    <div className='h-96 w-full'>
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { pageSize },
          },
        }}
        pagination
        loading={loading}
        rowHeight={70}
        sx={{ height: "calc(100vh - 215px)", backgroundColor: "#ffffff" }}
      />
    </div>
  );
}
