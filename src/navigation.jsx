import * as React from 'react';
import {PageMain} from "./components/pages/page-main";
import {PageAuth} from "./components/pages/page-auth";
import {PageReg} from "./components/pages/page-reg";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PageNotFound } from './components/pages/page-not-found';
import { PageProfile } from './components/pages/page-profile';

export const Navigation = () =>
{
    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageMain />} />
                <Route path="profile" element={<PageProfile />} />
                <Route path="*" element={<PageNotFound />} /> 
            </Routes>
        </BrowserRouter>
        </div>
    )
}