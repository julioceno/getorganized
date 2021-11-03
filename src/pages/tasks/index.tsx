import React, { useState } from "react";
import {
  Theme,
  Box,
  Grid,
  Typography,
  Button,
  List,
  TextField,
  useMediaQuery,
} from "@mui/material";
import Head from "next/head";
import { makeStyles } from "@mui/styles";

import NotesIcon from '@mui/icons-material/Notes';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { ButtonComponent } from "../../components/Button";

import { tasks } from "../../utils/tasks";
import { theme } from "../../styles/theme";

interface TasksProps {
  title: string;
  text: string;
  completed: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.background.paper,
    paddingRight: "3%",
    paddingLeft: "3%",
  },
  titleContainer: {
    display: "flex",
    height: "4rem",
    alignItems: "flex-end"
  
  },
  title: {
    fontWeight: 600,
    fontSize: "1.8rem",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  list: {
    height: "calc(100vh - 4rem)",
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '0'
    },
    [theme.breakpoints.down("md")]: {
      height: "calc(100vh - 32.5rem)",
    },
  },
  task: {
    background: theme.palette.secondary.main,
    padding: "1rem 2rem",
    display: "flex",
    borderRadius: ".2rem",
    maxWidth: "60rem"
  },
  headerTask: {
    display: "flex",
    justifyContent: "space-between",
    height: "4rem"
  },
  titleTask: {
    fontWeight: 500,
    fontSize: "1.3rem",
  },
  noteIcon: {
    transform: "rotateY(180deg)",
    color: "#fff",
    height: 40,
    width: 40,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskText: {
    fontSize: "1.15rem",
  },
  bottomTask: {
    marginTop: "1rem"
  },
  status: {
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
  },
  statusContainer: {
    marginRight: ".2rem"
  },
  createTask: {
    background: theme.palette.secondary.main,
    marginLeft: "4rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  inputsContainer: {
    height: "40%",
    marginTop: "5rem",
    paddingRight: "2rem",
    paddingLeft: "2rem",

    [theme.breakpoints.down("md")]: {
      marginTop: "1rem",
      paddingBottom: "2rem",
    },
  },
  labelInput: {
    color: "#fff"
  },
  textField: {
    color: theme.palette.text.primary,
    background: "#000",
    borderRadius: ".4rem",
    root: "#fff"
  },
  buttonContainer: {
    marginTop: "2rem"
  },
  notDataContainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    paddingBottom: "5rem",
  },
  image: {
    [theme.breakpoints.down("xl")]: {
      height: "40%",
    },
    [theme.breakpoints.down("lg")]: {
      height: "40%",
    },
    [theme.breakpoints.down("md")]: {
      height: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      height: "60%",
    },
  },
  noDataText: {
    textAlign: "center",
    fontSize: "1.3rem",
    marginLeft: "1rem",
  },
  
}));

export default function Tasks() {
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [title, setTitle] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  const classes = useStyles();
  const isMinWidth900 = useMediaQuery('(max-width:900px)');

  function addTask() {
    setTitle("")
    setDescription("")

    const task = {
      title,
      text: description,
      completed: false
    } as TasksProps;

    setTasks((array) => {
      return [task, ...array]
    })
  };

  const inputLabelProps = {
    classes: {
      root: classes.labelInput,
    }
  };

  return (
    <Box className={classes.root}>
      <Head>
        <title>Tarefas</title>
      </Head>
      <Grid
        container
        direction={isMinWidth900? "column-reverse" : "row"}
      >
        <Grid 
          container 
          item 
          direction="column"
          xs
        >
          <Grid item className={classes.titleContainer}>
            <Typography className={classes.title}>Tarefas</Typography>
          </Grid>
            <List 
              className={classes.list}
              dense
              component="div"
              role="list"
            >
              { tasks[0]? tasks.map( ({ title, text, completed }: TasksProps, indice) => (
                  <Grid 
                    container 
                    item 
                    className={classes.task} 
                    marginTop={10} 
                    key={String(indice)}
                    xs
                  >
                    <Grid 
                      container 
                      item 
                      className={classes.headerTask}
                      paddingRight={5}
                    >
                      <Grid 
                        item 
                        xs={11}
                      >
                        <Typography className={classes.titleTask}>
                          {title} 
                        </Typography>
                      </Grid>
                      <Grid 
                        item
                        xs={1}
                      >
                      <Button>
                        <NotesIcon className={classes.noteIcon}/>
                      </Button>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item 
                      xs
                      className={classes.taskTextContainer}
                    >
                      <Typography className={classes.taskText}>
                        {text} 
                      </Typography>
                    </Grid>
                    <Grid 
                      container 
                      item 
                      className={classes.bottomTask}
                    >
                      <Grid 
                        item 
                        xs
                        className={classes.status}
                      >
                        <Typography 
                          className={classes.statusContainer}
                          style={{ color: completed? theme.palette.success.main : theme.palette.error.main }}
                        >
                          { completed? "Concluida" : "Pendente" }
                        </Typography>
                        <CheckCircleIcon style={{ color: completed? theme.palette.success.main : theme.palette.error.main }}/>
                      </Grid>
                    </Grid>
                  </Grid>
              ))
              :
              <Box className={classes.notDataContainer}>
                <img 
                  src="../no-data.svg"
                  className={classes.image}
                />
                
                <Typography className={classes.noDataText}>
                  Você ainda não cadastrou<br />
                  nenhuma tarefa
                </Typography>
              </Box>
            }
            </List>
        </Grid>
        <Grid 
          container 
          item 
          xs={4}
          className={classes.createTask}
          direction="column"
        >
          <Grid item className={classes.titleContainer}>
            <Typography 
              className={classes.title}
              style={{textAlign: "center"}}  
            >
              Crie uma nova tarefa</Typography>
          </Grid>
          <Box 
            className={classes.inputsContainer}
          >
            <Grid item >
              <TextField   
                color={"warning"}
                fullWidth
                label="Titulo da tarefa"
                margin= "normal"
                className={classes.textField}
                InputLabelProps={inputLabelProps}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </Grid>
            <Grid item>
            <TextField
              color={"warning"}
              fullWidth
              label="Descreva sua tarefa"
              multiline
              rows="5"
              className={classes.textField}
              margin="normal"
              InputLabelProps={inputLabelProps}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            </Grid>
            <Grid 
              item
              className={classes.buttonContainer}
            >
              <ButtonComponent 
                title="Adicionar"
                onClick={() => {
                  if (title && description) addTask();
                }}
              /> 
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
};