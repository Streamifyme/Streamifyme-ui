// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'

   // ** logo
   const Img = styled('img')(({ }) => ({
  
}))


const Problem = () => {
  return (
    <Card>
      <Grid container spacing={6}>
      <Grid
          item
          sm={5}
          xs={12}
          sx={{ paddingTop: ['0 !important', '1.5rem !important'], paddingRight: ['1.5rem !important', '0 !important'] ,backgroundColor: '#2e76bc'}}
        >
          <CardContent

          >
            <Box>
              <Box sx={{ mb: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingButtom:'4' }}>
              <Img  alt='TT Logo' src='/images/misc/doubt.png' />
              </Box>
             
            </Box>
          </CardContent>
        </Grid>
        <Grid item xs={12} sm={7} sx={{backgroundColor: '#2e76bc'}} >
          <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>

            
           
           
        
            <Typography variant='body2'>
            
            </Typography>
            <Divider sx={{ marginTop: 6.5, marginBottom: 6.75 }} />
            <Typography style={{color: 'white'}} variant='h6'>
            Pain Points
            </Typography>
            <Divider style={{color: 'white'}} sx={{ marginTop: 6.5, marginBottom: 6.75 }} />
            <Typography style={{color: 'white'}} variant='body2'>
            
            Learner's drop out rate is up by 67 % with most of them leaving due to a lack of Motivation and engaging content. We need to fix this problem by focusing on ways to Motivate the users ,Personalise and Reward their learning journey.
<Divider style={{color: 'white'}} sx={{ marginTop: 6.5, marginBottom: 6.75 }} />
<Typography style={{color: 'white'}} variant='h6'>
            Solution
            </Typography>
            <Divider style={{color: 'white'}} sx={{ marginTop: 6.5, marginBottom: 6.75 }} />
            We created a dApp that can connect learner and content creator together to achieve learning goals, that can create business impact for the organization. Content creator can signup, create courses, assign reward for courses. Learners can signup, purchase and learn the courses, take assessment and earn rewards in USDCx super token. Learners can unwrap the token to stable coin and withdraw to their exchange account.

            </Typography>
        
            
    
            
          </CardContent>
        </Grid>
        
      </Grid>
    </Card>
  )
}

export default Problem
