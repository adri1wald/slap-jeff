import type { NextPage } from 'next'
import { useRef } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { MousePosition } from '@react-hook/mouse-position'
import Cursor from '@/components/Cursor'

const Home: NextPage = () => {
  const ref = useRef<HTMLElement>(null)
  const getIsInverted = (mouse: MousePosition) => {
    if (!ref.current) return false
    const rect = ref.current.getBoundingClientRect()
    const midpoint = (rect.left + rect.right) / 2
    return (mouse.x ?? 0) > midpoint
  }

  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Cursor
        renderCursor={(mouse) => (
          !getIsInverted(mouse) ? (
            <Image
              src='/slap.png'
              alt='slap hand'
              width={194}
              height={316}
              layout='fixed'
            />
          ) : (
            <Image
              src='/slap-inverted.png'
              alt='slap hand'
              width={194}
              height={316}
              layout='fixed'
            />
          )
        )}
      >
        <Box
          ref={ref}
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
            layout='fill'
            objectFit='contain'
          />
        </Box>
      </Cursor>
    </Box>
  )
}

export default Home
