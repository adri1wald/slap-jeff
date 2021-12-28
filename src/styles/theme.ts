import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
  typography: {
    fontFamily: '"Sofia Pro", "Roboto", "Helvetica", "Arial", sans-serif'
  },
  palette: {
    primary: {
      main: '#1b3f5f'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  }
})

export default theme
