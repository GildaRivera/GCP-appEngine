import React from "react";
import {
  Avatar,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Loading, Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateR } from "../../redux/user/reducer";
import { userDataDelete } from "../../redux/user/reducer";
export function Profile(props) {
  const ENDPOINT = process.env.REACT_APP_ENDPOINT_API;
  const { user } = useSelector((state) => state.user);
 
  const dispatch = useDispatch();
 
 


  const style = {
    // backgroundImage: `url(${image})`,
    height: "20vh",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };
 
  

  return (
    <div>
      <div
        style={{
          position: "relative",
          left: "4vw",
          display: "block",
          top: "8vh",
        }}
      >
     
      </div>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormControl>
            <TextField
              id="name"
              name="name"
              label="Name"
              disabled
          defaultValue={user.name}
              variant="outlined"
              sx={{ margin: "2vh 0" }}
  
            />
          </FormControl>
          <FormControl>
            <TextField
              id="username"
              name="username"
              disabled
              label="Username"
         defaultValue={user.username}
              variant="outlined"
              sx={{ margin: "2vh 0" }}
            />
          </FormControl>

          <FormControl>
            <TextField
              id="biografia"
              label="Biografia"
              name="biografia"
           defaultValue={user.biografia}
           disabled
              variant="outlined"
              sx={{ margin: "2vh 0" }}
            />
          </FormControl>
          <FormControl>
            <TextField
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              value={user.password}
              sx={{ margin: "2vh 0" }}
              disabled
              required
            />
          </FormControl>
          <Button  variant="contained" onClick={()=>{
              dispatch(userDataDelete())
          }}>
            Go back
          </Button>
        </Box>
      </Container>
    </div>
  );
}
