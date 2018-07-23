import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default class Simple extends React.PureComponent {
  state = {
    lat: -19.9173,
    lng: -43.9346,
    zoom: 13
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom} style={{ height: "500px" }}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <b>Belo Horizonte City</b>
          </Popup>
        </Marker>
      </Map>
    );
  }
}
