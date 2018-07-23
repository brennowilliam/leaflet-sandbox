import React from "react";
import L from "leaflet";

class BasicExample extends React.Component {
  state = {
    position: [-19.9173, -43.9346]
  };

  componentDidMount() {
    this.initializeMap();
  }

  render() {
    return (
      <div>
        <h1>Basic Example</h1>
        <div style={{ height: "500px" }} id="map" />
        <p>
          Current coordinates: x: {this.state.position[0]} - y:
          {this.state.position[1]}
        </p>
      </div>
    );
  }

  initializeMap = () => {
    const map = L.map("map").setView(this.state.position, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(this.state.position)
      .addTo(map)
      .bindPopup("Center of Belo Horizonte City");
  };
}

export default BasicExample;
