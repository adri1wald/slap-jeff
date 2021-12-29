import type { NextPage } from 'next'
import { useRef } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { MousePosition } from '@react-hook/mouse-position'
import Cursor from '@/components/Cursor'

const Home: NextPage = () => {
  const ref = useRef<HTMLElement>(null)
  const getIsInverted = (mouse: MousePosition) => {
    if (!ref.current || mouse.x === null) return false
    const rect = ref.current.getBoundingClientRect()
    const midpoint = (rect.left + rect.right) / 2
    return mouse.x > midpoint
  }

  return (
    <Box sx={{ width: '100%', height: '100vh' }}>
      <Cursor
        renderCursor={(mouse) => (
          <Box
            sx={{
              position: 'relative',
              width: { xs: 97, sm: 126, md: 194, lg: 252 },
              height: { xs: 158, sm: 205, md: 316, lg: 411 }
            }}>
            {!getIsInverted(mouse) ? (
              <Image
                src='/slap.png'
                alt='slap hand'
                layout='fill'
                objectFit='contain'
              />
            ) : (
              <Image
                src='/slap-inverted.png'
                alt='slap hand'
                layout='fill'
                objectFit='contain'
              />
            )}
          </Box>
        )}
      >
        <Box
          ref={ref}
          sx={{
            position: 'relative',
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
            priority
          />
        </Box>
      </Cursor>
    </Box>
  )
}

export default Home
