import { LatLngTuple } from "leaflet";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  const [map, setMap] = useState<any>(null);

  const fetchMap = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/countries", {
      method: "GET",
    });
    const data = await response.json();
    setMap(data);
  };

  useEffect(() => {
    fetchMap();
  }, []);

  if (!map) {
    return <h1 style={{ marginLeft: "200px" }}>Loading...</h1>;
  }

  const worldCenter: LatLngTuple = [0, 0];
  const worldZoom = 2;
  //   console.log(map);

  const markerMouseOver = (e: any) => {
    e.target.openPopup(); // Open the popup on hover
  };

  const markerMouseOut = (e: any) => {
    e.target.closePopup(); // Close the popup when mouse leaves
  };

  return (
    <div className="ml-[110px] p-5 w-[80%] h-[90vh]">
      <MapContainer
        style={{ height: "100%", width: "100%" }}
        center={worldCenter}
        zoom={worldZoom}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {map.map((countryData: any) => (
          <Marker
            key={countryData.country}
            position={[
              countryData.countryInfo.lat,
              countryData.countryInfo.long,
            ]}
            eventHandlers={{
              mouseover: (e) => markerMouseOver(e),
              mouseout: (e) => markerMouseOut(e),
            }}
          >
            <Popup>
              <div>
                <img src={countryData.countryInfo.flag} alt="flag" />
                <h2>{countryData.country}</h2>
                <p>Total Cases: {countryData.cases}</p>
                <p>Total Deaths: {countryData.deaths}</p>
                <p>Total Recovered: {countryData.recovered}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
