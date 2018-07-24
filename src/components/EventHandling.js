import React, { createRef, Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

export default class EventHandling extends Component {
  state = {
    hasLocation: false,
    latlng: {
      lat: -19.9173,
      lng: -43.9346
    }
  };

  mapRef = createRef();

  handleClick = () => {
    this.mapRef.current.leafletElement.locate();
  };

  handleLocationFound = e => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng
    });
  };

  render() {
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng}>
        <Popup>
          <span>You are here</span>
        </Popup>
      </Marker>
    ) : null;

    return (
      <Map
        center={this.state.latlng}
        length={4}
        onClick={this.handleClick}
        onLocationfound={this.handleLocationFound}
        ref={this.mapRef}
        zoom={13}
        style={{ height: "500px" }}
      >
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
      </Map>
    );
  }
}
