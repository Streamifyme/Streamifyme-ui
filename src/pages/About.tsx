// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import dynamic from "next/dynamic";



const Login = dynamic(() => import("./TestLogin"), {
    ssr: false,
  });

  const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
      borderRight: ``
    }
  }))


   // ** logo
   const Img = styled('img')(({ }) => ({
  
}))

const About = () => {
  return (
    <Card>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={7}>
          <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
            <Typography variant='h3' sx={{ marginBottom: 3.5 }}>
             StreamifyMe
            </Typography>
            <Typography variant='h6'>
            Enables content creator to influence learners behaviour
            </Typography>
            <Typography variant='body1'>
            Incentivizing learners and content creators
            </Typography>
           
            <Divider sx={{ marginTop: 6.5, marginBottom: 6.75 }} />
           
            <Typography variant='body2'>
            We created a dApp that can connect learner and content creator together to achieve learning goals, that can create business impact for the organization. Content creator can signup, create courses, assign reward for courses. Learners can signup, purchase and learn the courses, take assessment and earn rewards in USDCx super token. Learners can unwrap the token to stable coin and withdraw to their exchange account.
            </Typography>
          
              <Divider sx={{ marginTop: 6.5, marginBottom: 6.75 }} />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={5}>
                <StyledBox>
                  <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                    <Login/>
                  </Box>
                </StyledBox>
              </Grid>
              <Grid item xs={12} sm={7}>
              
                
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
        <Grid
          item
          sm={5}
          xs={12}
          sx={{ paddingTop: ['0 !important', '1.5rem !important'], paddingLeft: ['1.5rem !important', '0 !important'] }}
        >
          <CardContent

          >
            <Box>
              <Box sx={{ mb: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingButtom:'4' }}>
              <Img  alt='Logo' src='./images/misc/hourglass.png' />
              </Box>
             
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default About
