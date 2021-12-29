import type { NextPage } from 'next'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Cursor from '@/components/Cursor'

const Home: NextPage = () => {
  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Cursor
        renderCursor={() => (
          <Image
            src='/slap.png'
            alt='slap hand'
            width={194}
            height={316}
            layout='fixed'
          />
        )}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Image
            src='/jeff.png'
            alt='jeff'
            width={1093}
            height={873}
            layout='fixed'
          />
        </Box>
      </Cursor>
    </Box>
  )
}

export default Home
