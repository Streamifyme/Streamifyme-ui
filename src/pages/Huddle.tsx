import * as React from 'react';
import { HuddleIframe, IframeConfig } from "@huddle01/huddle01-iframe";
 

// ** Styled Component Import

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import Divider from '@mui/material/Divider'
import { useStore } from 'src/services/store';

import { useEffect, useState } from 'react'

// ** Icons Imports


const iframeConfig: IframeConfig = {
    roomUrl: "https://app.huddle01.com/0x8dF57E4c80",
    height: "600px",
    width: "1000px",
    noBorder: false, // false by default
};
 

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
  },
}));



const Huddle = () => {
  const gridStyles = useGridStyles();
  
  
  const {
    state: { contract },
  } = useStore();

  const [topPerformers, setTopPerformers] = useState([]);
  const fetchTopPerformers = async () => {
    const newTopPerformers = await contract.getTopPerformers();
    setTopPerformers(newTopPerformers);
  };

  //To fetch employees onload
  useEffect(() => {
      if (!contract) {
        return;
      }

      fetchTopPerformers();
    }, [contract]);

  return (
    <>
      <Grid classes={gridStyles} container spacing={10} textAlign='center' display='flex' justifyContent='center'>
        <Grid item xs={12}>
            <Typography variant='h5'>&#11088; Live Courses &#11088;</Typography>
        </Grid>
        <Grid item xs={12} sx={{ paddingBottom: 2, paddingTop: 2 }}>
            <Divider
                textAlign='left'
                sx={{
                m: 0,
                width: '100%',
                lineHeight: 'normal',
                textTransform: 'uppercase',
                '&:before, &:after': { top: 7, transform: 'none' },
                '& .MuiDivider-wrapper': { px: 2.5, fontSize: '0.75rem', letterSpacing: '0.21px' }
                }}
            />
        </Grid>
        {topPerformers.map((performer) => ((performer[0] != 0) 
          
        ))}
        <div>
            <HuddleIframe config={iframeConfig} />
        </div>
      </Grid>
    </>
  );
}


export default Huddle
