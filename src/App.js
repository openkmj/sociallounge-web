import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MoimPage from "./pages/MoimPage";
import MoimDetailPage from "./pages/MoimDetailPage";
import ApplyPage from "./pages/ApplyPage";
import MyPage from "./pages/MyPage";
import MagazinePage from "./pages/MagazinePage";
import NoticePage from "./pages/NoticePage";
import FaqPage from "./pages/FaqPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";

import Menu from "./components/common/Menu";
import MobileMenu from "./components/common/MobileMenu";
import Footer from "./components/common/Footer/Footer";

function App() {
  return (
    <div>
      <Menu />
      <MobileMenu />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/moim" component={MoimPage} />
        <Route path="/moimdetail" component={MoimDetailPage} />
        <Route path="/apply" component={ApplyPage} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/magazine" component={MagazinePage} />
        <Route path="/notice" component={NoticePage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/terms" component={TermsPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Redirect path="*" to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
