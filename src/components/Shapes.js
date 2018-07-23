import React from "react";
import L from "leaflet";
import _ from "lodash";

class Shapes extends React.Component {
  state = {
    cities: [
      {
        name: "Belo Horizonte",
        position: [-19.9173, -43.9346],
        text: "Belo Horizonte City - Beautiful Horizon City"
      },
      {
        name: "Contagem",
        position: [-19.9173, -43.9346],
        text: "Contagem - City"
      }
    ]
  };

  componentDidMount() {
    this.initializeMap();
  }

  render() {
    return (
      <div>
        <h1>Shapes and Markers</h1>
        <div style={{ height: "500px" }} id="map" />
      </div>
    );
  }

  initializeMap = () => {
    const starterCity = _.find(
      this.state.cities,
      city => city.name === "Belo Horizonte"
    );

    const map = L.map("map").setView(starterCity.position, 11);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(starterCity.position)
      .addTo(map)
      .bindPopup(starterCity.text);

    const circle = L.circle(starterCity.position, {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 2000
    })
      .addTo(map)
      .bindPopup("Circle marker Example");

    const polygon = L.polygon([
      [-19.891181, -44.123854],
      [-19.889244, -44.020514],
      [-19.963803, -44.054846]
    ])
      .addTo(map)
      .bindPopup("Polygon over regions in Contagem City");
  };
}

export default Shapes;
