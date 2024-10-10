import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, NavLink, Outlet } from "react-router-dom";
import Bye from "../compoments/about/Hello";
import Hello from "../compoments/about/Bye";
import applyStyles from "../hoc/applyStyles";

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const AboutPage = (props: any) => {
  // internal style css
  const textStyle = {
    color: "blue",
    fontstyle: "bold",
  };

  return (
    <>
      <div>
        <Helmet>
          <title>About Us</title>
        </Helmet>
        <h1>About us</h1>
        <p style={textStyle}>About us- internal css</p>
        {/* inline css */}
        <p
          style={{
            color: "red",
            fontSize: "20px",
          }}
        >
          sample test data to demo inline style
        </p>
        <nav>
          <ul>
            <li>
              <NavLink to="leadership">Leadership</NavLink>
            </li>
            <li>
              <NavLink to="our-history">Our History</NavLink>
            </li>
            <li>
              <NavLink to="annual-report">Annual Report</NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <Outlet />
        <hr />
        <StyledHello />

        <StyledBye />
{/* 
        <h3>Demo'ing Runtime Error</h3>
        <button onClick={props.x()}>Click Me</button> */}
      </div>
    </>
  );
};

export default AboutPage;
