import {useState,useEffect} from 'react';
const useLocation= ()=>{
    const [lat,setLat] = useState(null);
    const [errorMessage,setErrorMessage]=useState('');
    useEffect(()=>{
        window.navigator.geolocation.getCurrentPosition(
            position => setLat({ lat: position.coords.latitude }),
            err => setErrorMessage({ errorMessage: err.message })
          );
    },[])
    return[lat,errorMessage];
}
export default useLocation;