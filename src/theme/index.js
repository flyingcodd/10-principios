import PropTypes from 'prop-types';
// @mui
import { CssBaseline } from '@mui/material';
import { createTheme, StyledEngineProvider, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
//
import palette from './palette';
import typography from './typography';
import GlobalStyles from './globalStyles';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const theme = createTheme({
    palette: palette(),
    typography,
    shape: { borderRadius: 8 }
  });

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        {/*<CssBaseline />*/}
        {/*<GlobalStyles />*/}
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
