import React from "react";
import {
  Button,
  AppBar,
  Box,
  Typography,
  Theme,
  Grid,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Head from "next/head";
import Link from "next/link";

import { ButtonComponent } from "../components/Button";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.paper,
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  appBar: {
    boxShadow: "none",
    height: "5rem",
    justifyContent: "flex-end",
  },
  title: {
    fontWeight: 600,
    fontSize: "2rem",
  },
  text: {
    fontWeight: 500,
    fontSize: "1.8rem",
    width: "100%",
    [theme.breakpoints.down("md")]: {
    },
  },
  textBold: {
    fontWeight: 600,
  },
  section: {
    height: "calc(100vh - 10rem)",
    display: "flex",
    alignItems: "center",
  },
  buttonContainer: {
    width: "13rem",
  },
  image: {
    [theme.breakpoints.down("xl")]: {
      height: "110%",
    },
    [theme.breakpoints.down("lg")]: {
      height: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      height: "50%",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const isMinWidth900 = useMediaQuery('(max-width:900px)');

  return (
    <Box className={classes.root} component="body">
      <Head>
        <title>Seja bem vindo</title>
      </Head>
      <AppBar position="static" className={classes.appBar} color="inherit">
        <Typography variant="h1" className={classes.title}>
          Get Organized
        </Typography>
      </AppBar>
      <Box 
        component="section"
        className={classes.section}
      >
          <Grid
            container
            direction={isMinWidth900 ? "column-reverse": "row"}
          >
            <Grid 
              container 
              item  
              spacing={10} 
              xs={12}
              md={6}
              justifyContent={isMinWidth900 ? "center": "flex-start"}
            >
              <Grid item xs={12}>
                <Typography 
                  className={classes.text} 
                  textAlign={isMinWidth900 ? "center": "start"}
                >
                  Organize suas tarefas de forma<br />
                  rápida e eficiente com a<br />
                  <strong>get organized</strong>
                </Typography>
              </Grid>
              <Grid item>
              <Link href={`/tasks`}>
                <Box className={classes.buttonContainer}>
                  <ButtonComponent 
                    title="Começar"
                  />
                </Box>
              </Link>
               
              </Grid>
            </Grid>   
            <Grid 
              container 
              item 
              xs={6}
              justifyContent={isMinWidth900 ? "center": "flex-start"}
            >
              <Grid item>
                <img 
                  src="/welcome.svg"
                  className={classes.image}
                />
              </Grid>
            </Grid>   
          </Grid> 
      </Box>
    </Box>
  );
}
