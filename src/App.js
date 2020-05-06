import React ,{useState} from "react";
import "./assets/css/main.css";
import { BrowserRouter, Route } from "react-router-dom";

/* side and top nav */
import TopNav from "./components/shared/topNavbar";
import SidebarLeft from "./components/shared/sidebarLeft";

/* components */
import NotificationComponent from './components/profile/notificationComponent';
import SettingsComponent from './components/profile/settingsComponent';
import TaskComponent from './components/task/taskComponent';
import HomeComponent from './components/homeComponent';

function App() {
  const [isLogged, setLogged] = useState(false);
  const toggleLogged = () =>{
    console.log("pressed");
    setLogged(!isLogged);
  }
  return (
    <BrowserRouter>
      <TopNav isLogged={isLogged} toggleLogged={toggleLogged}/>
      {isLogged ? <SidebarLeft /> : null }
      <div className="container main-container">
        <Route exact path="/" component={()=> <HomeComponent toggleLogged={toggleLogged} isLogged={isLogged}/>}/>
        { isLogged ?<> <Route exact path="/profile/notification/" component={NotificationComponent}/>
        <Route exact path="/profile/settings/" component={SettingsComponent}/>
        <Route exact path="/mytasks/" component={TaskComponent}/> </>: null}
      </div>
    </BrowserRouter>
  );
}

export default App;
