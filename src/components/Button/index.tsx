import React from "react";
import {
  Theme,
  Button,
  Typography,
  ButtonProps
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { theme } from "../../styles/theme";

interface ButtonComponentProps extends ButtonProps {
  title: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    width: "100%",
    height: "3rem",
    fontSize: "1.3rem",
    alignSelf: "center",
  },
  text: {
    fontWeight: 500,
    fontSize: "1.4rem",
    width: "100%",
  }
}));

export function ButtonComponent({ title, ...rest}: ButtonComponentProps) {
  const classes = useStyles()
 
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      {...rest}
    >
      <Typography className={classes.text}>
        { title }
      </Typography>
    </Button>
  );
};