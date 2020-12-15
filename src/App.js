import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import axios from "axios";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import MoimPage from "./pages/MoimPage";
import MoimDetailPage from "./pages/MoimDetailPage";
import ApplyPage from "./pages/ApplyPage";
import MyPage from "./pages/MyPage";
import NoticePage from "./pages/NoticePage";
import FaqPage from "./pages/FaqPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";

import Menu from "./components/common/Menu/Menu";
import MobileMenu from "./components/common/MobileMenu/MobileMenu";
import Footer from "./components/common/Footer/Footer";
import MobileFooter from "./components/common/MobileFooter/MobileFooter";

function App() {
    React.useEffect(() => {
        axios
            .get("/auth/name")
            .then((result) => {
                console.log(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div>
            <Menu />
            <MobileMenu />
            <Switch>
                <Route path="/" component={MainPage} exact />
                <Route path="/login" component={LoginPage} />
                <Route path="/moim" component={MoimPage} />
                <Route path="/moimdetail" component={MoimDetailPage} />
                <Route path="/apply" component={ApplyPage} />
                <Route path="/mypage" component={MyPage} />
                <Route path="/notice" component={NoticePage} />
                <Route path="/faq" component={FaqPage} />
                <Route path="/terms" component={TermsPage} />
                <Route path="/privacy" component={PrivacyPage} />
                <Redirect path="*" to="/" />
            </Switch>
            <Footer />
            <MobileFooter />
        </div>
    );
}

export default App;
