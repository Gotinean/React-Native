import Applications from './pages/applications';
import './App.css';
import AboutMe from './pages/aboutMe/aboutMe';
import ToDoApp from './pages/toDoList/toDoApp';
import WeatherApp from './pages/weatherApp/weatherApp';
import { BrowserRouter, Route } from "react-router-dom";
import Gallery from './pages/gallery/gallery';


const App = () => {
  return (
    <BrowserRouter>
      <div className='default'>
        <h3>Welcome to my list with Apps</h3>
        <h4>Choose the Applications</h4>
        <Applications />
        <div>
          <Route path="/aboutMe" component={AboutMe} />
          <Route path="/toDoApp" component={ToDoApp} />
          <Route path="/weatherApp" component={WeatherApp} />
          <Route path="/gallery" component={Gallery} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
