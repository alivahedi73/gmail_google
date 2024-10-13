import "./Home_page.scss";
import { google_svg, languge } from "./data_home_page";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FaAngleDown } from "react-icons/fa";
const Home_page = () => {
  let [click, setClick] = React.useState(false);
  let [clicklan, setClicklan] = React.useState([1, languge[0].name]);
  return (
    <>
      <div className="home_page_main">
        <div className="form">
          <div className="main_form">
            <div className="google_svg">{google_svg}</div>
            <div className="main_dtail_div">
              <div className="sign_word_div">
                <h1>Sign in</h1>
                <span>to continue to Gmail</span>
              </div>
              <div className="input_div">
                <Box>
                  <TextField fullWidth label="Email or Phone" id="fullWidth" />
                </Box>
                {/* new compents */}
                <div className="forgat_input">Forgot email?</div>
                {/* new components */}
                <div className="deatail__page__home">
                  <p className="deatail__page__home_p">
                    Not your computer? Use Guest mode to sign in privately.
                  </p>
                  <a href="#" className="deatail__page__home_link">
                    Learn more about using Guest mode
                  </a>
                </div>
              </div>
            </div>
            <div className="button_home_page_div">
              <div className="button_home_page_div_create_acu">
                Create account
              </div>
              <div className="button_home_page_div_next">Next</div>
            </div>
          </div>
        </div>
        <div className="navbar_google">
          <div
            className={`navbar_google_langugeProcess ${
              click ? "opened" : null
            }`}
            onClick={() => setClick(!click)}
          >
            <p>{clicklan[1]}</p>
            <FaAngleDown
              style={
                click
                  ? { transform: "rotate(180deg)" }
                  : { transform: "rotate(0)" }
              }
            />
            <div className={`choise_class ${click ? "open" : "close"}`}>
              <div className={`choise_main ${click ? "open" : "close"}`}>
                {languge.map((item, index) => {
                  return (
                    <div
                      className="languge_choise"
                      key={index}
                      onClick={() => setClicklan([item.id, item.name])}
                    >
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="navbar_google_Help">
            <a href="#">Help</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_page;
