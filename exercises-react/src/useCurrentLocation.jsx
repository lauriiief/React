import { useEffect, useState } from "react"


export function useCurrentLocation() {
    const [location, setLocation] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    function getCurrentLocation(){
        function success(pos){
            const crd = pos.coords;

            console.log("Your current position is:");
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);

        }

        function error(err){
            setError(err)
            console.log(err.code, err.message)
        }

        navigator.geolocation.getCurrentLocation(success, error)
    }
    
    return {location, loading, error, CurrentLocation: useCurrentLocation}
}