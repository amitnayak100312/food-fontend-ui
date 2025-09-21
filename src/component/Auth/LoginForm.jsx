import React from "react";
import { Typography, TextField, Button} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../State/Authentication/Action";

const initialValues = {
  email: "",
  password: "",
};


export const LoginForm = () => {
  const navigate= useNavigate()
  const dispatch=useDispatch()
  const handleSubmit = (values) => {
    dispatch(loginUser({userData:values,navigate}))
   
  };

  return (
    <div>
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleChange, values }) => (
          <Form>
            <Field
              as={TextField}
              name="email"
              label="Email"
              fullWidth
              variant="outlined"
              margin="normal"
              value={values.email}
              onChange={handleChange}
            />

            <Field
              as={TextField}
              type="password"
              name="password"
              label="Password"
              fullWidth
              variant="outlined"
              margin="normal"
              value={values.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 ,padding:"1rem"}}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
      <Typography variant="body2" align="center"  sx={{mt:3}}>
        Don't have an account?
        <Button size='small' onClick={()=>navigate("/account/register")}>
          register
        </Button>
      </Typography>

    </div>
  );
};