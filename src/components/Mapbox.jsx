import React from "react";
import { Circle, GoogleMap, LoadScript, Marker, useJsApiLoader} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 7.296564,
  lng: 81.856192,
};


const bin1P = {
  lat: 7.296564,  
  lng: 81.856192
};

const bin2p = {
  lat: 7.301675728356817,
  lng: 81.8558047514224
}

const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FFF",
  fillOpacity: 0.0,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 60,
  zIndex: 1,
};

function Mapbox(props) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAXgUsU3PpGER7knX9MpFd5e5mygDzTmtM",
  });

   if (loadError) {
     return (
       <div className="map-box">Map cannot be loaded right now, sorry.</div>
     );
   }

  return isLoaded ? (
    <div className="map-box">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker title={"Bin1"} name={"Bin 1"} position={bin1P} />

        <Circle center={bin1P} options={options} />

        <Marker title={"Bin2"} name={"Bin 2"} position={bin2p} />

        <Circle center={bin2p} options={options} />
      </GoogleMap>
    </div>
  ) : (
    <div className="map-box">Loding..</div>
  );


  // return (
  //   <div className="map-box">
  //     <LoadScript googleMapsApiKey="AIzaSyAXgUsU3PpGER7knX9MpFd5e5mygDzTmtM">
  //       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
  //         <Marker
  //           title={"The marker`s title will appear as a tooltip."}
  //           name={"SOMA"}
  //           position={{ lat: 7.296564, lng: 81.856192 }}
  //         />

  //       </GoogleMap>
  //     </LoadScript>
  //   </div>
  // );
}

export default Mapbox;
