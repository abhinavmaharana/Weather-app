import { useState, useEffect } from "react";

export const useLocation = () => {
    const [location, setLocation] = useState();

    useEffect(() => {
        if (!navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(e => {
                const location = {
                    latitude: 32,
                    longitude: 78
                };
                setLocation(location)
        })
        } else {
            navigator.geolocation.getCurrentPosition(data => {
                const location = {
                    latitude: `${!data ? '32' : data.coords.latitude}`,
                    longitude: `${!data ? '48' :data.coords.longitude}`
                };
                setLocation(location)
            })
        }
    }, []);


    return location;
}