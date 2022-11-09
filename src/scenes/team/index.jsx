import { Box, Grid } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import Sidebar from "../../scenes/global/Sidebar";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    
    {
      field: "Name",
      flex: 1,
      
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
    },                                                                                                                        
    {
      field: "Permissions",
      headerName: "Permissions",
      flex: 1,
    },
    
    
    
  ];

  return (  
   
    <Grid container spacing={2}>
      <Grid item xs={1}>
        <Sidebar/>
      </Grid>
      
      <Grid item xs={10}>
        <Box m="20px">
          <Header
            title="Internal Controls"
            subtitle="List of Collaborators"
          />
          
          <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
                color: colors.greenAccent[300],
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: colors.blueAccent[700],
                borderBottom: "none",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: colors.primary[400],
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "none",
                backgroundColor: colors.blueAccent[700],
              },
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${colors.grey[100]} !important`,
              },
            }}
            >
              
            <DataGrid
              rows={mockDataTeam}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Team;