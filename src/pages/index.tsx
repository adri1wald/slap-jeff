import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import Cursor from '@/components/Cursor'

const Home: NextPage = () => {
  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Cursor>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: (theme) => (theme.palette.secondary.main)
          }}
        >
        </Box>
      </Cursor>
    </Box>
  )
}

export default Home
