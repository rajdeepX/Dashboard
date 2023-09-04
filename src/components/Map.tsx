import { LatLngTuple } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Loading from "./Loading";
import { useQuery } from "react-query";
import { fetchMapData } from "./api";

const Map = () => {
  // Fetch COVID-19 map data using the useQuery hook
  const { data: map, isLoading, isError } = useQuery("map", fetchMapData);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const worldCenter: LatLngTuple = [0, 0]; //setting the location to display the world map
  const worldZoom = 2; // initial zoom value on map load

  const markerMouseOver = (e: any) => {
    e.target.openPopup(); // function to open the popup on hover
  };

  const markerMouseOut = (e: any) => {
    e.target.closePopup(); // function to close the popup when mouse leaves
  };

  return (
    <div className="p-5 w-[100%] h-[90vh]">
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
