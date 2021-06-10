import React from 'react';
import Info from './components/info';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "285af7a64b60cc9f96514c1e274563ce";

class App extends React.Component {

    state={
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: undefined

    }

    gettingWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        
        if(city){
        const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        const data =await api_url.json();
        console.log(data);

        const sunset = data.sys.sunset
        const dateSunset = new Date();
        dateSunset.setTime(sunset);
        const sunset_date = dateSunset.getHours() + ":" + dateSunset.getMinutes() + ":" + dateSunset.getSeconds();
        //const temperature = (data.main.temp - 32)/1.8;
        
        
        this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            sunset: sunset_date,
            error: undefined

            });
        }
        else{
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                pressure: undefined,
                sunset: undefined,
                error: "Введите название города"
            });
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Info />
                <Form weatherMethod={this.gettingWeather}/>
                <Weather 
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                pressure={this.state.pressure}
                sunset={this.state.sunset}
                error={this.state.error}/>
            </div>
        );
    }   
}

export default App;