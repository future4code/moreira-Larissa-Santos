import React from "react";
import HomePage from "../pages/HomePage/HomePage"
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage"
import ApplicattionFormPage from "../pages/ApplicationFormPage/ApplicationFormPage"
import ListTripsPage from "../pages/ListTripPage/ListTripsPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage"
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage"
import { BrowserRouter as Route, Routes, Router, } from "react-router-dom";
//Switch foi substituido por Routes



export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<HomePage />} />

        <Route exact path={"/login"} element={<LoginPage />} />

        <Route exact path={"/trips/list"} element={<ListTripsPage />} />

        <Route exact path={"/admin/trips/list"} element={<AdminHomePage />} />
        
        <Route exact path={"/trips/application"} element={<ApplicattionFormPage />} />
        
        <Route exact path={"/admin/trips/:id"} element={<TripDetailsPage />} />

        <Route exact path={"/admin/trips/create"} element={<CreateTripPage />} />

      </Routes>
    </BrowserRouter>
  );
}