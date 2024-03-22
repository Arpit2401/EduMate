import { createTheme } from '@mui/material/styles';

import { COLOR_PALETTE, fontsStatic, fontsCdn, fontWeights } from '@constants';

//To customize the base theme provided by the MUI
export const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 976,
      lg: 1280,
      xl: 1600,
    },
  },

  palette: {
    primary: {
      light: COLOR_PALETTE.orange[200],
      main: COLOR_PALETTE.orange[500],
      dark: COLOR_PALETTE.orange[800],
    },

    secondary: {
      light: COLOR_PALETTE.blue[200],
      main: COLOR_PALETTE.blue[500],
      dark: COLOR_PALETTE.blue[800],
    },

    grey: {
      50: COLOR_PALETTE.grey[50],
      100: COLOR_PALETTE.grey[100],
      200: COLOR_PALETTE.grey[200],
      300: COLOR_PALETTE.grey[300],
      400: COLOR_PALETTE.grey[400],
      500: COLOR_PALETTE.grey[500],
      600: COLOR_PALETTE.grey[600],
      700: COLOR_PALETTE.grey[700],
      800: COLOR_PALETTE.grey[800],
      900: COLOR_PALETTE.grey[900],
    },
  },

  spacing: (size: number) => `${size * 1}rem`,

  typography: {
    htmlFontSize: 10,
    fontFamily: ['Ubuntu', 'Inter', 'sans-serif'].join(','),

    h1: {
      fontWeight: fontWeights.BOLD_FONT_WEIGHT,
      fontSize: '5rem',
      lineHeight: 1.2,
      color: COLOR_PALETTE.grey[900],
    },

    h2: {
      fontWeight: fontWeights.BOLD_FONT_WEIGHT,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      color: COLOR_PALETTE.black,
    },

    h3: {
      fontWeight: fontWeights.BOLD_FONT_WEIGHT,
      fontSize: '2.25rem',
      lineHeight: 1.5,
      color: COLOR_PALETTE.grey[900],
    },

    h4: {
      fontWeight: fontWeights.SEMI_BOLD_FONT_WEIGHT,
      fontSize: '2rem',
      lineHeight: 1,
      color: COLOR_PALETTE.grey[900],
    },

    h5: {
      fontWeight: fontWeights.BOLD_FONT_WEIGHT,
      fontSize: '1.6rem',
      lineHeight: 1.5,
      color: COLOR_PALETTE.grey[900],
    },

    h6: {
      fontWeight: fontWeights.MEDIUM_FONT_WEIGHT,
      fontSize: '1.6rem',
      lineHeight: 1.5,
      color: COLOR_PALETTE.grey[900],
    },

    body1: {
      fontWeight: fontWeights.REGULAR_FONT_WEIGHT,
      fontSize: '1.8rem',
      lineHeight: 1.5,
      color: COLOR_PALETTE.black,
    },

    body2: {
      fontWeight: fontWeights.REGULAR_FONT_WEIGHT,
      fontSize: '1.4rem',
      lineHeight: 1.5,
      color: COLOR_PALETTE.grey[500],
    },

    subtitle1: {
      fontWeight: fontWeights.MEDIUM_FONT_WEIGHT,
      fontSize: '1.4rem',
      lineHeight: 1.5,
      color: COLOR_PALETTE.grey[500],
    },

    subtitle2: {
      fontWeight: fontWeights.MEDIUM_FONT_WEIGHT,
      fontSize: '1.2rem',
      lineHeight: 1.5,
      color: COLOR_PALETTE.grey[500],
    },

    caption: {
      fontWeight: fontWeights.REGULAR_FONT_WEIGHT,
      fontSize: '1.2rem',
      lineHeight: 1.5,
      color: COLOR_PALETTE.grey[500],
    },

    button: {
      fontWeight: fontWeights.SEMI_BOLD_FONT_WEIGHT,
      fontSize: '1.4rem',
      lineHeight: 1.5,
      color: COLOR_PALETTE.white,
      textTransform: 'none',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: ` 

      ${process.env.NODE_ENV === 'development' ? fontsStatic : fontsCdn}
      
      html{
        font-size: 62.5%;
      }

      body {
        line-height: 1;
        letter-spacing: 0;
        font-size: 1.6rem;
        vertical-align: baseline;
      }

      a {
        text-decoration: none;
        outline: none;
      }

      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: ${COLOR_PALETTE.scrollbarTrack};
      }

      ::-webkit-scrollbar-thumb {
        background: ${COLOR_PALETTE.scrollbarThumb}
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${COLOR_PALETTE.scrollbarHover}
      }
      `,
    },
  },
});
