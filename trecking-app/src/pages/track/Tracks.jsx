import React, {useEffect, useState} from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import "./tracks.scss";



function Tracks() {
  const [track, setTrack] = useState([])
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "trackname",
      headerName: "Track Name",
      width: 150,
      editable: true,
    },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      width: 150,
      editable: true,
      valueGetter: (params) => {
        const rawDateValue = params.row.date;
        const dateObject = new Date(rawDateValue);
        if (isNaN(dateObject.getTime())) {
          return null;
        }
        return dateObject;
      },
    },
    {
      field: "participant",
      headerName: "Participant",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "capacity",
      headerName: "Capacity",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "edit",
      headerName: "Edit",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        const handleEditClick = () => {
          const rowData = params.row;
          console.log("Edit button clicked for row with ID:", rowData.id);

          setTrack(rows )
          // console.log(track)
        };
        return (
          <div className="edit" onClick={handleEditClick}>
            Edit
          </div>
        );
      },
      editable: false,
    },
    {
      field: "delete",
      headerName: "Delete",
      sortable: false,
      width: 160,
      renderCell: (params) => {
        const handleEditClick = () => {
          const rowData = params.row;
          console.log("Edit button clicked for row with ID:", rowData.id);
        };
        return (
          <div className="delete" onClick={handleEditClick}>
            Delete
          </div>
        );
      },
      editable: false,
    },
  ];
  
  const rows = [
    {
      id: 1,
      trackname: "ABC",
      date: "2015-03-25",
      participant: 19,
      capacity: 25,
    },
    {
      id: 2,
      trackname: "ABC",
      date: "2015-03-25",
      participant: 19,
      capacity: 25,
    },
    {
      id: 3,
      trackname: "ABC",
      date: "2015-03-25",
      participant: 19,
      capacity: 25,
    },
    {
      id: 4,
      trackname: "ABC",
      date: "2015-03-25",
      participant: 19,
      capacity: 25,
    },
    {
      id: 5,
      trackname: "ABC",
      date: "2015-03-25",
      participant: 19,
      capacity: 25,
    },
    {
      id: 6,
      trackname: "ABC",
      date: "2015-03-25",
      participant: 19,
      capacity: 25,
    },
    {
      id: 7,
      trackname: "ABC",
      date: "2015-03-25",
      participant: 19,
      capacity: 25,
    },
    {
      id: 8,
      trackname: "ABC",
      date: "2015-03-25",
      participant: 19,
      capacity: 25,
    },
    {
      id: 9,
      trackname: "ABC",
      date: "2015-03-25",
      participant: 19,
      capacity: 25,
    },
    {
      id: 10,
      trackname: "ABC",
      date: "2015-03-25",
      participant: 19,
      capacity: 25,
    },
    {
      id: 11,
      trackname: "ABC",
      date: "2015-03-25",
      participant: 19,
      capacity: 25,
    },
    {
      id: 12,
      trackname: "ABC",
      date: "2015-03-25",
      participant: 19,
      capacity: 25,
    },
    {
      id: 13,
      trackname: "ABC",
      date: "2015-03-25",
      participant: 19,
      capacity: 25,
    },
  ];
  useEffect(() => {
    setTrack(rows)
  }, [])
  
  return (
    <div className="Tracks">
      <div className="top">
        <div className="text">
          <h2>All Tracks</h2>
        </div>
        <div className="btn">Add New</div>
      </div>
      {console.log(track)}
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          sx={{ fontFamily: "Kanit", display: "flex", justifyContent: "center" }}
          rows={track}
          columns={columns}
          // initialState={{
          //   pagination: {
          //     paginationModel: {
          //       // pageSize: 14,
          //     },
          //   },
          // }}
          autoPageSize
          {...rows}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
}

export default Tracks;
