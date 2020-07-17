import React from "react";
import Button from "@material-ui/core/Button";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e33371',
      contrastText: '#fff'
    },
    secondary : {
        main:'#ffc107',
        contrastText: '#fff'
    }
  }
});

const MyButton = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        href={props.link}
        variant="contained"
        color={props.color? props.color : "primary"}
        endIcon={props.icon}
      >{props.text}</Button>
    </ThemeProvider>
  );
};

export default MyButton;
