// ** MUI Imports
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports

import AccountConvert from 'mdi-material-ui/AccountConvert'
import { brown } from '@mui/material/colors'

const Feature3 = () => {
  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#2e76bc',
          padding: theme => `${theme.spacing(9.75, 5, 9.25)} !important`
        }}
      >
        <Avatar
          sx={{ width: 50, height: 50, marginBottom: 2.25, color: 'common.white', backgroundColor: brown[700] }}
        >
          <AccountConvert sx={{ fontSize: '2rem' }} />
        </Avatar>
        <Typography style={{color: 'white'}} variant='h6' sx={{ marginBottom: 2.75 }}>
        Instant Streaming Content creators
        </Typography>
        <Typography style={{color: 'white'}} variant='body2' sx={{ marginBottom: 6 }}>
        We believe one size doesnt fit all and use the state of the art AI to understand individual pain points and overcome it better.</Typography>
        <Button style={{color: 'white'}} variant='outlined' sx={{ padding: theme => theme.spacing(1.75, 5.5) }}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  )
}

export default Feature3
