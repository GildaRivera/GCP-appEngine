import React from "react";
import {
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Loading, Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../redux/user/reducer";
import "./login.css";
import { Profile } from "../profile/Profile";

// const dotenv = require("dotenv");
// // get config vars
// dotenv.config();
// const ENDPOINT = process.env.REACT_APP_ENDPOINT_API;
const ENDPOINT = "https://us-central1-calcium-vector-346319.cloudfunctions.net/user";
export const Form = (props) => {
  const [form, setForm] = useState({
    username: "",

  });
  const [logged, setlogged] = useState(false);
  const [user, setUser] = useState({});
  const handleUpdate = (e) => {
    setForm((prev) => {
      let newValue = e.target.value;
      prev[e.target.name] = newValue;
      return prev;
    });
  };

  const dispatch = useDispatch();

  async function handleLog() {

  
  
    Loading.circle();
    if (form.username == "") {
      Loading.remove();
      Notify.failure("Please enter the rigth username");
      return null;
    }
    await fetch(`${ENDPOINT}?` + new URLSearchParams({
        username: form.username,
 
    }), {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          Notify.success("User found", { timeout: 1000 });
          return response.json();
        }
        throw Error;
      })
      .then(async function (actualData) {
          
      await dispatch(userData(actualData[0]));
      })
      .catch((err) => {
   console.log(err)
        Notify.failure("User does not exists", { timeout: 1000 });
      });

    Loading.remove();
  }


  return (
    <div className="login__container">
      <Container maxWidth="sm" sx={{ position: "relative", top: "20vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{ textAlign: "center", color: "#E64545" }}
          >
            Get user data
          </Typography>
          <FormControl>
            <TextField
              name="username"
              label="Username"
              variant="outlined"
              sx={{ margin: "2vh 0" }}
              onChange={handleUpdate}
            />
          </FormControl>
         

          <Button
            onClick={handleLog}
            variant="contained"
            sx={{ marginBottom: "2vh" }}
          >
            Login
          </Button>
      
        </Box>
      </Container>

    </div>
  );
};
