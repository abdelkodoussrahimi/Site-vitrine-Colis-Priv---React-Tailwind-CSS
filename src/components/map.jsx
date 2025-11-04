import axios from 'axios';
import { MapContainer,Marker,Popup,TileLayer, useMap} from "react-leaflet"
import { Icon, map,  } from "leaflet";
import "leaflet/dist/leaflet.css"
import { useEffect, useState } from "react"; // Assuming you're using axios for HTTP requests
import { SearchBar } from "./map/SearchBar";
import { SearchResultsList } from "./map/SearchResultsList";
import {motion} from 'framer-motion'
import { fadeIn} from '../variants'

const RelayPointMap = () => {
    const [locations, setLocations] = useState([]);
    const [zipCodes, setZipCodes] = useState([]);
    const [zipCode, setzipCode] = useState();
    const [data, setdata] = useState([])
    const [idCity, setIdCity] = useState("-1"); 
     const [markersData, setMarkersData] = useState([]);
     const [results, setResults] = useState([]);



    useEffect(() => {
        // Fetch locations from the server
        axios.get('https://abdelkodouss.000webhostapp.com/relayPoints/getLocotions.php')
            .then(response => {
                setLocations(response.data);
            })
            .catch(error => {
                console.error('Error fetching locations:', error);
            });
            
           
        // Fetch zip codes from the server
        axios.get('https://abdelkodouss.000webhostapp.com/relayPoints/getZipCode.php')
            .then(response => {
                setZipCodes(response.data);
            })
            .catch(error => {
                console.error('Error fetching zip codes:', error);
            });
       
              try {
                // Remplacer 'URL_DE_VOTRE_API' par l'URL réelle de votre API qui fournit les données de latitude et de longitude
                fetch('https://abdelkodouss.000webhostapp.com/relayPoints/getAllRelayPoints.php/')
          .then(response => response.json())
          .then(data => {
            // Process the received data here
            console.log(data);
            setdata(data)
          })
      
              } catch (error) {
                console.error('Erreur lors du chargement des données :', error);
              }

              
          
    }, []);
   
   
   
    useEffect(() => {
       // Only make the request if idCity is not the initial value
          axios.get(`https://abdelkodouss.000webhostapp.com/relayPoints/getRelayPoint.php?cityId=${idCity}`)
              .then(response => {
                  setMarkersData(response.data);
                  console.log("Data received:", response.data);
              })
              .catch(error => {
                  console.error('Error fetching relay points:', error);
              });
      
  }, [idCity]);

  useEffect(() => {
setMarkersData(data)

  },[data])


  useEffect(()=>{
if(results.length>0){
    setMarkersData(results)}else{
        setMarkersData(data)
    }
  },[results])
    
    const customIcon = new Icon({
      // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
      iconUrl: require("../assets/logo.png"),
      iconSize: [30, 30] // size of the icon
    });


    return (
        <motion.div variants={fadeIn('right',0.5)}
        initial="hidden" 
        whileInView={'show'} className="p-10 flex flex-col lg:flex-row bg-gray-100 h-screen   ">
        <div className="flex flex-col px-8  w-3/2 ">
    <div className="search-bar-container">
        
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      
   
        



</div>
        <div  className="z-10 w-full  h-full  ">
            <MapContainer center={[33.573110, -7.5898434]} zoom={8} style={{ height: '100%', width: '100%' }}>
    <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    />
 {markersData.map((i, index) => (
        <Marker key={index} position={[i.latitude, i.longitude]} icon={customIcon}>
            <Popup>{i.name}</Popup>
        </Marker>
    ))}
   
</MapContainer>
        </div>
    
</motion.div>

    );
};

export default RelayPointMap;