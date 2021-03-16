import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MyTheme from './Theme';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';
import Brightness5RoundedIcon from '@material-ui/icons/Brightness5Rounded';
// import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import './App.css';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container'
import PropTypes from 'prop-types';
import PowerSettingsNewRoundedIcon from '@material-ui/icons/PowerSettingsNewRounded';
import FlipCameraAndroidRoundedIcon from '@material-ui/icons/FlipCameraAndroidRounded';
import SettingsRemoteRoundedIcon from '@material-ui/icons/SettingsRemoteRounded';
import WbIncandescentOutlinedIcon from '@material-ui/icons/WbIncandescentOutlined';



const styles = theme => ({
  button: {
    margin: 15,
  },
  input: {
    display: 'none',
  },
});

function Tubelight()
{
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel 
    control={<Checkbox 
      checked={checked}
      icon={<WbIncandescentOutlinedIcon />}
      checkedIcon = {<WbIncandescentOutlinedIcon />}
      onChange = {(e) => setChecked(e.target.checked)} 
      inputProps={{
        'aria-label' : 'secondary checkbox'
      }}
    />}
    
    />
      
  )
}

class App extends Component {
  constructor(props)
  {
    super(props);
  }  

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={MyTheme}>
          <Container size="xs">
            <header className="App-header">
                <Typography variant='h1'>
                  Remote - LED
                </Typography>                
                <Box borderRadius="7%"  mb={15} style={{background: MyTheme.palette.companyDarker.mainGradient}} >
                  <Box borderRadius="50%" m={1} ml={20} mt={2} > 
                    <Button
                    size="large"
                    variant="contained"  
                    style={{background: MyTheme.palette.secondary.mainGradient}} 
                    >
                      <WbIncandescentOutlinedIcon />
                    </Button>
                  </Box>

                  <Box mt={3} ml={5} mb={5} mr={5} >
                      <Box ml={2} mr={2}>
                        <ButtonGroup>
                          <Button
                          onClick={()=> alert('Brightness Up')} 
                          size="large"
                          href="#"
                          variant="contained"  
                          color="secondary"    
                          >
                              <Brightness7RoundedIcon/>
                          </Button>
                          <Button
                          onClick={()=> alert('Brightness Down')} 
                          size="large"
                          href="#"
                          variant="contained" 
                          color="primary"  
                          >
                              <Brightness5RoundedIcon/>
                          </Button>  
                          <Button
                          onClick={()=> alert('Lights On')} 
                          size="large"
                          href="#"
                          color="white" 
                          variant="contained"  
                          >
                              ON  
                          </Button>
                          <Button
                          onClick={()=> alert('OFF!')} 
                          size="large"
                          href="#"
                          variant="contained" 
                          color="white"  
                          >
                              OFF
                          </Button>
                        </ButtonGroup>
                      </Box>
                    
                  </Box>
                  <Box mt={2} ml={6} mb={5} mr={5}>
                  <ButtonGroup size="large">
                    <Button href="#" variant="contained" style={{background: MyTheme.palette.companyRed.mainGradient}} color="companyRed" >
                    ‎‎‎‏‏‎ ‎‏‏‎ ‎R‏‏‎ ‎‏‏‎ ‎
                    </Button>
                    <Button href="#" variant="contained" style={{background: MyTheme.palette.companyGreen.mainGradient}} color="companyGreen" >
                    ‎‏‏‎ ‎‏‏‎ ‎G‏‏‎‏‏‎ ‎ ‎
                    </Button>
                    <Button href="#" variant="contained" style={{background: MyTheme.palette.companyBlue.mainGradient}}  color="companyBlue" >
                    ‎‎‏‏‎ ‏‏‎ ‎‎B‏‏‎‏‏‎ ‎ ‎
                    </Button>
                    <Button href="#" variant="contained" style={{background: MyTheme.palette.companyWhite.mainGradient}} color="companyWhite" >
                    ‏‏‎ ‏‏‎ ‎‎‎‎‎W‏‏‎‏‏‎ ‎ ‎
                    </Button>
                    </ButtonGroup>
                  </Box>
                  <Box ml={9} mr={5} mb={2}>
                  <ButtonGroup size="large">
                        <Button href="#" variant="contained" style={{background: MyTheme.palette.companyOrange.mainGradient}} color="companyOrange">
                        01
                        </Button>
                        <Button href="#" variant="contained" style={{background: MyTheme.palette.companyAmber.mainGradient}} color="companyAmber">
                        02
                        </Button>
                        <Button href="#" variant="contained" style={{background: MyTheme.palette.companyGold.mainGradient}} color="companyGold" >
                        03
                        </Button>
                        <Button href="#" variant="contained" style={{background: MyTheme.palette.companyYellow.mainGradient}} color="companyYellow">
                        04
                        </Button>
                    </ButtonGroup>
                  </Box>
                  <Box ml={9} mr={2} mb={2} >   
                  <ButtonGroup size="large">
                        <Button href="#" variant="contained" style={{background : MyTheme.palette.companyLime.mainGradient}} color="companyLime">
                        05
                        </Button>
                        <Button href="#" variant="contained" style={{background: MyTheme.palette.companyMarine.mainGradient}} color="companyMarine">
                        06
                        </Button>
                        <Button href="#" variant="contained" style={{background: MyTheme.palette.companyTeal.mainGradient}} color="companyTeal">
                        07
                        </Button>
                        <Button href="#" variant="contained" style={{background: MyTheme.palette.companyMint.mainGradient}} color="companyMint">
                        08
                        </Button>
                    </ButtonGroup>
                  </Box>
                  <Box ml={9} mr={5} mb={2}>  
                    <ButtonGroup size="large">
                         <Button href="#" variant="contained" style={{background: MyTheme.palette.companyLavender.mainGradient}} color="companyLavender">
                         09
                         </Button>
                         <Button href="#" variant="contained" style={{background: MyTheme.palette.companyPurple.mainGradient}}  color="companyPurple">
                         10
                         </Button>
                         <Button href="#" variant="contained" style={{background: MyTheme.palette.companyPink.mainGradient}} color="companyPink">
                         11
                         </Button>
                         <Button href="#" variant="contained" style={{background: MyTheme.palette.companyMagenta.mainGradient}} color="companyMagenta">
                         12
                         </Button>
                    </ButtonGroup>
                  </Box>
                  <Box ml={9} mr={5} mb={5}>  
                    {/* <Grid container size={50} spacing={2} justify="center"> */}
                    <ButtonGroup size="large">
                        <Button href="#" variant="contained" style={{background: MyTheme.palette.companyDark.mainGradient}} color="companyGreen">
                        13
                        </Button>
                        <Button href="#" variant="contained" style={{background: MyTheme.palette.companyDark.mainGradient}} color="companyDark">
                        14
                        </Button>
                        <Button href="#" variant="contained" style={{background: MyTheme.palette.companyDark.mainGradient}}  color="companyDark">
                        15
                        </Button>
                        <Button href="#" variant="contained" style={{background: MyTheme.palette.companyDark.mainGradient}}  color="companyDark">
                        16
                        </Button>
                      
                    </ButtonGroup>   
                    
                  </Box>
                  <Box mb={7} ml={10}>
                    <ButtonGroup>
                      <Box mr={2}>
                        <Button
                            onClick={()=> alert('ShutDown!')} 
                            size="large"
                            href="#"
                            variant="contained" 
                            color="secondary"  
                            >
                                <PowerSettingsNewRoundedIcon/>
                        </Button>
                      </Box>
                      <Box mr={2} ml={2}> 
                      {/* IR sensing */}
                        <Button
                            onClick={()=> alert('IR sensing!')} 
                            size="large"
                            href="#"
                            variant="contained" 
                            color="white"  
                            >
                                <SettingsRemoteRoundedIcon/>
                        </Button>
                      </Box>
                      <Box ml={2}>
                        <Button
                            onClick={()=> alert('Restart')} 
                            size="large"
                            href="#"
                            variant="contained" 
                            color="primary"  
                            >
                                <FlipCameraAndroidRoundedIcon/>
                        </Button>
                      </Box>
                    </ButtonGroup>
                  </Box>
                </Box> 
            </header>   
          </Container>
      </MuiThemeProvider>
      );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);