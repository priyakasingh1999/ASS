import {
  Container,
  Grid,
  Box,
} from "@mui/material";

import InfoSubHead from "../../GlobalComponent/InfoSubHead";
import CancelIcon from "@mui/icons-material/Cancel";

import AddSessionReuse from '../../GlobalComponent/AddSessionReuse'

const iconSize = {width:"30px",height:"30px",bgcolor:"transparent",p:"5px" };

const AddSession = () => {
 

  return (
    <Container maxWidth="lg" sx={{ mt: 3, p: { xs: 0 } }}>
      <Grid container>
        <Grid item md={8} xs={12}>
          <Box>
            <InfoSubHead
              name="Add Session"
              urlname={<CancelIcon />}
              backgroundColor={"#1688ca"}
              color={"#fff"}
            />
          </Box>
        </Grid>

        <Grid
          itm
          md={8}
          xs={12}
          sx={{ bgcolor: "#fff", py: 1, px: 2, minHeight: "650px" }}
        >
          <AddSessionReuse/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddSession;
