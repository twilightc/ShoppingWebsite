import React, { FC } from "react";
import { Navbar } from "../../Components/navbar/navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps
} from "react-router-dom";

export const MainPage: FC<RouteComponentProps> = ({ history, match }) => {
  return (
    <>
      <div>Main</div>
    </>
  );
};
