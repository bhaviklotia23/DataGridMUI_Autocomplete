import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import TextDrop from "./TextDrop.jsx";

export default function DataGridDemo() {
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [inputValue, setInputValue] = useState({});
  var gridNorm;
  const columns = [
    {
      field: "SOURCE_SYSTEM",
      headerName: "Source System",
      width: 130,
    },
    { field: "SUPPLIER_NBR", headerName: "Supplier NBR", width: 130 },
    { field: "SUPPLIER_TIN", headerName: "Supplier TIN", width: 130 },
    {
      field: "SUPPLIER_NAME",
      headerName: "Supplier Name",
      type: "text",
      width: 325,
    },
    {
      field: "SUPPLIER_NORM_NAME",
      headerName: "Supplier Norm Name",
      sortable: false,
      editable: true,
      width: 325,
      // warnIfFocusStateIsNotSynced: true
    },
    {
      field: "OVERRIDE_SUPPLIER_NORM_NAME",
      description:
        "Search from existing list of normalized name or enter a new normalized name",
      headerName: "Override Supplier Norm Name",
      // editable: inputValue ? true : false,
      width: 450,
      renderCell: (params) => {
        return (
          <TextDrop
            inputValue={inputValue}
            setInputValue={setInputValue}
            id={params.id}
            gridNorm={gridNorm}
          />
        );
      },
    },
    {
      field: "SUPPLIER_COUNTRY",
      headerName: "Supplier Country",
      sortable: false,
      width: 230,
    },
    {
      field: "ML_MATCH_METHOD",
      headerName: "ML Match Method",
      sortable: false,
      width: 130,
    },
    {
      field: "ML_CONFIDENCE_SCORE",
      headerName: "ML Confidence Score",
      sortable: false,
      width: 160,
    },
    {
      field: "SUPPLIER_NAME_ENG_LNG",
      headerName: "Supplier Name Eng Lng",
      type: "text",
      width: 300,
    },
    {
      field: "SUPPLIER_NAME_MLCLN",
      headerName: "Supplier Name MLCLN",
      width: 170,
    },
    // {
    //   field: "INSERTED_DT",
    //   headerName: "Insert Date",
    //   sortable: false,
    //   width: 130,
    // },
    // {
    //   field: "UPDATED_DT",
    //   headerName: "Update Date",
    //   sortable: false,
    //   width: 130,
    // },
  ];

  const rows = [
    {
      id: 1,
      SOURCE_SYSTEM: "Snow",
      SUPPLIER_NBR: "SUPPLIER_NBR",
      SUPPLIER_NAME: "Jon",
      SUPPLIER_NORM_NAME: "asdasd",
      OVERRIDE_SUPPLIER_NORM_NAME: "demo",
      SUPPLIER_COUNTRY: "demo",
      ML_MATCH_METHOD: "demo",
      ML_CONFIDENCE_SCORE: "ML_CONFIDENCE_SCORE",
      SUPPLIER_NAME_ENG_LNG: "SUPPLIER_NAME_ENG_LNG",
      SUPPLIER_NAME_MLCLN: "SUPPLIER_NAME_MLCLN",
    },

    {
      id: 2,
      SOURCE_SYSTEM: "Snow",
      SUPPLIER_NBR: "SUPPLIER_NBR",
      SUPPLIER_NAME: "Jon",
      SUPPLIER_NORM_NAME: "asdasd",
      OVERRIDE_SUPPLIER_NORM_NAME: "demo",
      SUPPLIER_COUNTRY: "demo",
      ML_MATCH_METHOD: "demo",
      ML_CONFIDENCE_SCORE: "ML_CONFIDENCE_SCORE",
      SUPPLIER_NAME_ENG_LNG: "SUPPLIER_NAME_ENG_LNG",
      SUPPLIER_NAME_MLCLN: "SUPPLIER_NAME_MLCLN",
    },

    {
      id: 3,
      SOURCE_SYSTEM: "Snow",
      SUPPLIER_NBR: "SUPPLIER_NBR",
      SUPPLIER_NAME: "Jon",
      SUPPLIER_NORM_NAME: "asdasd",
      OVERRIDE_SUPPLIER_NORM_NAME: "demo",
      SUPPLIER_COUNTRY: "demo",
      ML_MATCH_METHOD: "demo",
      ML_CONFIDENCE_SCORE: "ML_CONFIDENCE_SCORE",
      SUPPLIER_NAME_ENG_LNG: "SUPPLIER_NAME_ENG_LNG",
      SUPPLIER_NAME_MLCLN: "SUPPLIER_NAME_MLCLN",
    },

    {
      id: 4,
      SOURCE_SYSTEM: "Snow",
      SUPPLIER_NBR: "SUPPLIER_NBR",
      SUPPLIER_NAME: "Jon",
      SUPPLIER_NORM_NAME: "asdasd",
      OVERRIDE_SUPPLIER_NORM_NAME: "demo",
      SUPPLIER_COUNTRY: "demo",
      ML_MATCH_METHOD: "demo",
      ML_CONFIDENCE_SCORE: "ML_CONFIDENCE_SCORE",
      SUPPLIER_NAME_ENG_LNG: "SUPPLIER_NAME_ENG_LNG",
      SUPPLIER_NAME_MLCLN: "SUPPLIER_NAME_MLCLN",
    },
    {
      id: 5,
      SOURCE_SYSTEM: "Snow",
      SUPPLIER_NBR: "SUPPLIER_NBR",
      SUPPLIER_NAME: "Jon",
      SUPPLIER_NORM_NAME: "asdasd",
      OVERRIDE_SUPPLIER_NORM_NAME: "demo",
      SUPPLIER_COUNTRY: "demo",
      ML_MATCH_METHOD: "demo",
      ML_CONFIDENCE_SCORE: "ML_CONFIDENCE_SCORE",
      SUPPLIER_NAME_ENG_LNG: "SUPPLIER_NAME_ENG_LNG",
      SUPPLIER_NAME_MLCLN: "SUPPLIER_NAME_MLCLN",
    },
  ];

  const handleRowClick = (params) => {
    const clickedRowId = params.id;
    const isRowSelected = selectedRowIds.includes(clickedRowId);
    if (isRowSelected) {
      const updatedSelectedRowIds = selectedRowIds.filter(
        (rowId) => rowId !== clickedRowId
      );
      setSelectedRowIds(updatedSelectedRowIds);
    } else {
      setSelectedRowIds([...selectedRowIds, clickedRowId]);
    }
  };
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      {/* <DataGrid
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
        checkboxSelection
        disableRowSelectionOnClick
      /> */}

      <DataGrid
        sx={{
          "& .MuiDataGrid-row:not(.MuiDataGrid-row--dynamicHeight) > .MuiDataGrid-cell":
            { borderInlineEnd: "0.01px solid lightgrey !important" },
          "& .MuiOutlinedInput-root": {
            padding: "0px !important",
          },
          "& .MuiDataGrid-columnHeadersInner": {
            backgroundColor: "#59989b !important",
            color: "#fff !important",
          },
        }}
        // onCellClick={handleCellClick}
        // rowCount={totalPages * pageSize}
        rows={rows}
        columns={columns}
        // onRowEditStop={handleEdit}
        // onCellEditStop={(p) => handleEdit(p)}
        onRowClick={handleRowClick}
        // editMode="row"
        // initialState={{
        //   pagination: {
        //     paginationModel: { page: currentPage, pageSize },
        //   },
        // }}
        // onCellKeyDown={(e) => {
        //   console.log(e, "ABCD");
        // }}
        // onCellEditStart={(e) => {
        //   console.log(e, "++>");
        // }}
        // onPaginationModelChange={handlePageChange}
        // pageSizeOptions={[25, 50, 100]}
        pageSizeOptions={false}
        checkboxSelection
        // rowSelectionModel={selectedRowIds}
        components={{
          Toolbar: () => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px",
              }}
            >
              {/* <div>
                <Alert severity="info">
                  The below grid displays upto 500 rows. Use above filters to
                  narrow down search scope.
                </Alert>
              </div> */}
              {/* <div>
                <Button
                  variant="contained"
                  onClick={(r) => {
                    handleSubmit(r);
                  }}
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "#59989b !important",
                    color: "#fff !important",
                    alignItems: "center",
                  }}
                >
                  Submit
                </Button>
              </div> */}
            </div>
          ),
        }}
      />
    </Box>
  );
}
