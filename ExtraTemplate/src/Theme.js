import { createMuiTheme } from '@material-ui/core/styles';
import {purple, pink, blue, red, green, indigo, yellow, cyan, orange} from '@material-ui/core/colors';

export default createMuiTheme({
    typography:{
        h1: {
          fontSize: 40,
          marginBottom: 50,
        //   background: 'radial-gradient(45deg, pink, red)',
        }
    },
    palette: {
        primary: { 
          main: blue[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to left, pink, blue)",
        },
        secondary: { 
          main: pink[500],
          contrastText: '#000',
          mainGradient: "white",
        },
        // Blue Starts
        companyBlue: { 
            backgroundColor: blue[500],
            contrastText: '#000',
            mainGradient: "linear-gradient(to right, #303f9f, cyan)",
        },
        companyLavender: { 
          backgroundColor: cyan[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to right, #4a148c, #6a1b9a)",
        },
        companyPurple: { 
            backgroundColor: purple[500], 
            contrastText: '#000',
            mainGradient: "linear-gradient(to right, purple, #9c27b0)",
        },
        companyPink: { 
          backgroundColor: pink[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to right, #b248a0, #a34a78)",
        },
        companyMagenta: { 
          backgroundColor: pink[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to right, #ec407a, #ff6090)",
        },
        // Red Starts
        companyRed: { 
          backgroundColor: red[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to right, #c62828, #ff6659)",
        },
        companyOrange: { 
          backgroundColor: orange[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to left, #d84315, #b71c1c)",
        },
        companyAmber: { 
          backgroundColor: orange[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to left, #ff6f00, #f57c00)",
        },
        companyGold: { 
          backgroundColor: orange[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to left, #ffa040, #ff8f00)",
        },
        companyYellow: { 
          backgroundColor: yellow[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to right, yellow, yellow)",
        },
        // Green Starts
        companyGreen: { 
          backgroundColor: green[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to right, #00600f, #7cb342)",
        },
        companyLime: { 
          backgroundColor: green[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to right, #64b5f6, #26c6da)",
        },
        companyMarine: { 
          backgroundColor: indigo[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to right, #4ebaaa, #0097a7)",
        },
        companyTeal: { 
          backgroundColor: cyan[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to right, #0097a7, #005662)",
        },
        companyMint: { 
          backgroundColor: cyan[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to left, #005662, #00695c)",
        },
        // Custom Theme 
        companyWhite: { 
          backgroundColor: yellow[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to right, white, #fafafa)",
        },
        companyDark: { 
          backgroundColor: green[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to left, #212121, #424242)",
        },
        companyDarker: { 
          backgroundColor: green[500],
          contrastText: '#000',
          mainGradient: "linear-gradient(to left, #140a14, #000a12)",
        },
    },
});