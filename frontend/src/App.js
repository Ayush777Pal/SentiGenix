import React from "react";
import SentimentAnalyzer from "./components/sentimental";
import { Route,Routes } from "react-router-dom";
import {Box} from '@mui/material';
import Intro from "./components/Intro";
import Create from "./components/Create";

function App() {
    return(
      <Box>    
               <Routes>
                <Route path="/" element={<Intro/>}></Route>
                <Route path="/create" element={<Create/>}></Route>
                <Route path="/sentiment" element={<SentimentAnalyzer/>}></Route>
            </Routes>
        </Box>

    )
}

export default App;
 