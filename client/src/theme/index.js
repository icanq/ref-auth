import { createTheme } from '@mui/material/styles';
import themeColor from './color'

let theme = createTheme({
  transitions: {
    duration: {
      shortest: 250,
      shorter: 300,
      short: 350,
      standard: 400,
      complex: 450,
      enteringScreen: 400,
      leavingScreen: 300,
    }
  },
  palette: {
    common: {
      black: themeColor.black,
      white: themeColor.white
    },
    secondary: {
      main: themeColor.secondary.main
    },
    primary: {
      light: themeColor.primary[3],
      main: themeColor.primary.main,
      dark: themeColor.primary.dark
    },
  },
  typography: {
    allVariants: {
      fontFamily: "inherit"
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: "20px",
      lineHeight: "20px",
      letterSpacing: "1.25px"
    },
    h1: {
      fontFamily: "MicroExtendFLF, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontWeight: 500,
      fontSize: "96px",
      lineHeight: "116px",
      letterSpacing: "-1.5px"
    },
    h2: {
      fontFamily: "MicroExtendFLF, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontWeight: 500,
      fontSize: "60px",
      lineHeight: "72px",
      letterSpacing: "-1.5px"
    },
    h3: {
      fontFamily: "MicroExtendFLF, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontWeight: 700,
      fontSize: "48px",
      lineHeight: "56px",
    },
    h4: {
      fontFamily: "MicroExtendFLF, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontWeight: 700,
      fontSize: "34px",
      lineHeight: "40px",
      letterSpacing: "0.2px"
    },
    h5: {
      fontFamily: "MicroExtendFLF, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "32px",
      letterSpacing: "0.25px"
    },
    h6: {
      fontFamily: "MicroExtendFLF, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "0.25px"
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.15px"
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.1px"
    },
    body2: {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "30px",
    },
    body1: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px"
    },
    caption: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.4px"
    },
    overline: {
      fontWeight: 500,
      fontSize: "10px",
      lineHeight: "16px",
      letterSpacing: "1.5px",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "standard"
      }
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", color: "primary.light" },
          style: {
            textDecoration: "underline"
          },
        },
      ],
      defaultProps: {
        variant: "contained",
        color: "secondary"
      },
      styleOverrides: {
        contained: {
          padding: "16px 27px"
        },
        outlined: {
          padding: "16px 27px"
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none"
        }
      }
    },
    MuiSelect: {
      defaultProps: {
        variant:"standard"
      }
    },
    MuiFormControl: {
      defaultProps: {
        variant: "standard"
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: themeColor.primary.gradient(),
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          fontFamily: "MicroExtendFLF, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
          fontWeight: 700,
          fontSize: "20px",
          color: themeColor.white
        },
      }
    },
  }
})

theme = createTheme(theme, {
  components: {
    MuiTableCell: {
      styleOverrides: {
        body: theme.typography.body2
      }
    }
  }
})

export default theme;