import {
  Box,
  Typography,
  OutlinedInput,
  FormControl,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const Searchd = () => {
  return (
    <Box sx={{}}>
      <Box
        sx={{
          position: "absolute",
          top: "25px",
          right:"0",
          width:{xs:150,sm:200,md:300},
          bgcolor: "white",
          boxShadow:"2px 2px 15px rgba(0 ,0 ,0 ,.2),-2px -2px 15px rgba(0 ,0 ,0 ,.2)",
          zIndex:999

          // p: 4
        }}
      >
        <Box sx={{position:"relative"}}>
          <Typography
            sx={{ textAlign: "center", p: 2, backgroundColor: "#DDD7FF" }}
            variant="h6"
            component="h2"
          >
            Search
            <CloseIcon href="#" sx={{position:"absolute",top:"2px",right:"2px",p:"3px" }} />
          </Typography>
          
        </Box>
        <FormControl sx={{p: 2 }}>
          <OutlinedInput placeholder="Search" color="primary" className="form-control" />
        </FormControl>
      </Box>
    </Box>
  );
};
