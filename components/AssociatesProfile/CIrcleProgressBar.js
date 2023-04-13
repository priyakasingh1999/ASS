import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyStation from '../Main-Dashboard/Station/MyStation/MyStation';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border:"4px solid #fff",
          borderRadius:"50%",
          zIndex:0,
          opacity:.5,
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.Primary"
          sx={{opacity:4,zIndex:99}}
        >{`${Math.round(props.value)}`}</Typography>
      </Box>
    </Box>
  );
}

export default function Progress({ data }) {
  const [progress, setProgress] = React.useState(10);
  

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 10 ? 10 : prevProgress + 1));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress}  sx={{zIndex:999}}/>;

  // let k = +(data)
  // const [progress, setProgress] = React.useState(k);



  // return <CircularProgressWithLabel value={progress} />;
}