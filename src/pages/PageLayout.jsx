import React from "react";
import { Outlet } from "react-router-dom";

function PageLayout() {

    return (
        <React.Fragment>
            <div>
                <Outlet />
            </div>
        </React.Fragment>
    );
}

export default PageLayout;