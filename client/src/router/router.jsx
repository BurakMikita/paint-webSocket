import { createBrowserRouter,Navigate } from "react-router-dom";

import SettingBar from "../components/SettingBar";
import Toolbar from "../components/Toolbar";
import Canvas from "../components/Canvas";


export const router = createBrowserRouter([
    {
        path: "/",
        element:  <Navigate replace to={`f${(+new Date).toString(16)}`}/>,

    },
    {
        index: true,
        path: "/:id",
        element: <> <Toolbar/>
        <SettingBar/>
        <Canvas/></>,
    }
  
])