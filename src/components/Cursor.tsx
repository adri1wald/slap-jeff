import { FC, useRef } from 'react'
import { styled } from '@mui/material/styles'
import useMouse, { MousePosition } from '@react-hook/mouse-position'

interface CursorElementProps {
  isVisible?: boolean
}

const CursorElement = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isVisible'
})<CursorElementProps>(({ isVisible = false }) => ({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  pointerEvents: 'none',
  zIndex: '9999',
  opacity: isVisible ? 100 : 0
}))

const CursorContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isVisible'
})<CursorElementProps>(({ isVisible = false }) => ({
  width: '100%',
  height: '100%',
  position: 'relative',
  cursor: isVisible ? 'none': 'auto'
}))

const DefaultCursor = styled('div')({
  width: '40px',
  height: '40px',
  border: '2px solid #fefefe',
  borderRadius: '100%',
})

const renderCursorDefault = () => <DefaultCursor />

interface CursorProps {
  renderCursor?: (mouse: MousePosition) => React.ReactNode
}

const Cursor: FC<CursorProps> = function Cursor(props) {
  const { children, renderCursor = renderCursorDefault } = props
  const ref = useRef<HTMLDivElement>(null)
  const mouse = useMouse(ref)

  return (
    <CursorContainer
      isVisible={mouse.isOver}
      ref={ref}
    >
      {children}
      <CursorElement
        isVisible={mouse.isOver}
        style={{
          left: `${mouse.x || 0}px`,
          top: `${mouse.y || 0}px`
        }}
      >
        {renderCursor(mouse)}
      </CursorElement>
    </CursorContainer>
  )
}

export default Cursor
