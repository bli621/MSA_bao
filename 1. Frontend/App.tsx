import './App.css';
import * as React from "react";
import axios from "axios";
import { Input, Button, Card, Divider } from "antd";
import "antd/dist/antd.min.css";
import { Content } from "antd/lib/layout/layout";
function App() {

    const [weather, setWeather] = React.useState({});
    const [location, setLocation] = React.useState("");
  
    let getUrl = (location) => {
      return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=RFXD3XRWYTFAMEXBF9W96RMLF&contentType=json`;
    };
  
    const requestWeatherData = (event) => {
      axios.get(getUrl(location)).then((response) => {
        setWeather(response.data);
      });
      setLocation("");
    };
    return (
      <Content style={{ height: "100vh", width: "100vw" }}>
        <Content>
          <Content>
            <Card>
              <div>
                <Input.Group compact>
                  <Input
                    style={{ width: "calc(100% - 80px)" }}
                    placeholder="Enter your city"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                  />
                  <Button type="primary" onClick={requestWeatherData}>
                    Search
                  </Button>
                </Input.Group>
              </div>
              <Divider />
              <div>
                <div className="city">
                  <h4>Date:</h4>
                  <p>{weather.days && weather.days[0].datetime}</p>
                </div>
                <div className="city">
                  <h4>City:</h4>
                  <p>{weather.address}</p>
                </div>
                <div className="temperature">
                  <h4>Min Temeprature: </h4>
                  {weather.days && <p>{weather.days[0].tempmin}</p>}
                </div>
                <div className="temperature">
                  <h4>Max Temeprature: </h4>
                  {weather.days && <p>{weather.days[0].tempmax}</p>}
                </div>
                <div className="conditions">
                  <h4>Conditions:</h4>
                  {weather.days && <p>{weather.days[0].conditions}</p>}
                </div>
              </div>
            </Card>
          </Content>
        </Content>
      </Content>
    );




}

export default App;
