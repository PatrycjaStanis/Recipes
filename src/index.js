import React from "react"; 
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from './page/Login';  // Strona "Moje konto"
import Registration from './page/Registration';  
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogHome from "./page/LogHome";
import AddRecipe from "./page/AddRecipe";
import LogOut from "./page/LogOut";
import ChangePass from "./page/ChangePass"; 
import AdminHome from "./admin/AdminHome";
import NewRecipes from "./admin/NewRecipes";
import Users from "./admin/Users";
import FindRecipies from "./admin/FindRecipies";
import AaddRecipe from "./admin/AaddRecipe";
import AchangePass from "./admin/AchangePass";
import Vege from "./page/Vege";
import FavoritesU from "./page/FavoritesU";

const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#90EE90",
    },
    secondary: {
      main: "#fff00",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ff9800",
    },
  },
};

const theme = createTheme(themeOptions);

// Definicja routera z poszczególnymi stronami
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Login",
    element: <Login/>
  },
  {
    path: "Registration",
    element: <Registration/>
  },
  {
    path: "LogHome",
    element: <LogHome/>
  },
  {
    path: "AddRecipe",
    element: <AddRecipe/>
  },
  {
    path: "LogOut",
    element: <LogOut/>
  },
  {
    path: "ChangePass",
    element: <ChangePass/>
  },
  {
  path: "AdminHome",
  element: <AdminHome/>
}, 
{
  path: "NewRecipies",
  element: <NewRecipes/>
},
{
  path: "Users",
  element: <Users/>
}, 
{
  path: "FindRecipies",
  element: <FindRecipies/>
},
{
  path: "NewRecipes",
  element: <NewRecipes/>
},
{
  path: "AaddRecipe",
  element: <AaddRecipe/>
},
{
  path: "AchangePass",
  element: <AchangePass/>
},
{
  path: "Vege",
  element: <Vege/>
},
{
  path: "FavoritesU",
  element: <FavoritesU/>
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
