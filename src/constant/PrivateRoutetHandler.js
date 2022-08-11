import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";
function PrivateRoutetHandler() {

    let authData = useSelector(state => state.authData.userInfo)

    return authData.loginStaus ? <Outlet /> : <Navigate to="/login" />

}

export default PrivateRoutetHandler