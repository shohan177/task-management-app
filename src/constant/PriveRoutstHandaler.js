import { Outlet, Navigate } from "react-router-dom";

import React from 'react'

function PriveRoutstHandaler() {
    return true ? <Outlet /> : <Navigate to="/login" />

}

export default PriveRoutstHandaler