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
      <div className='grid'>
      <div className="grid-head">
        <h3 className="grid-items">Welcome to my list with Apps</h3>
        <h4 className="grid-items">Choose the Applications</h4>
        <Applications />
        </div>
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
