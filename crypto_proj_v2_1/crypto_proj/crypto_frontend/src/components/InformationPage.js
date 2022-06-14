import React from "react";
import "../static/css/InformationPage.css"
import Image from "../static/images/tree_leaves.jpg";

const InformationPage = () => {

    return (
        <div className="info_page_main">
            <div>
                <body>
                    <nav class="navMenu">
                        <div className="{test}">
                            <a className="{test}" href="#">Home</a>
                            <a href="#">Sign Up</a>
                            <a href="#">About</a>
                            <a href="#">Creator</a>
                            <div class="dot"></div>
                        </div>
                    </nav>
                </body>
            </div>
        </div>
    )
}

export default InformationPage;