import "./Home_page.scss";
import { google_svg } from "./data_home_page";
const Home_page = () => {
  return (
    <>
      <div className="home_page_main">
        <div className="form">
          <div className="main_form">
            <div className="google_svg">{google_svg}</div>
            <div className="main_dtail_div">
                <div className="sign_word_div">
                    <h1>Sign in</h1>
                </div>
                <div className="input_div"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_page;
