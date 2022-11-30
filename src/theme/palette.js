import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  lighter: '#D5E3F9',
  light: '#7D9DDF',
  main: '#284695',
  dark: '#14276B',
  darker: '#071147',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#F9F3D5',
  light: '#DFC97D',
  main: '#957628',
  dark: '#6B4D14',
  darker: '#472D07',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#D0EBFE',
  light: '#72B6F9',
  main: '#1770ED',
  dark: '#0B40AA',
  darker: '#041F71',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#CAFBD0',
  light: '#60E88C',
  main: '#05B560',
  dark: '#02825E',
  darker: '#00564F',
  contrastText: '#fff',
};

const WARNING = {
  lighter: '#FDECCA',
  light: '#F3B562',
  main: '#D86602',
  dark: '#9B3801',
  darker: '#671A00',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FDDDD1',
  light: '#F58075',
  main: '#E01D30',
  dark: '#A10E37',
  darker: '#6B0534',
  contrastText: '#fff',
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette() {
  return {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };
}
