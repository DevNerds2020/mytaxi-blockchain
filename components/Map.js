import React from 'react'
import { useEffect, useContext } from 'react'
import mapboxgl from 'mapbox-gl'
import { TaxiContext } from '../context/taxContext'
const style={
    wrapper: `flex-1 h-full w-full`,
}
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
const Map = () => {
    const { pickupCoordinates, dropoffCoordinates } = useContext(TaxiContext)
    console.log(pickupCoordinates, dropoffCoordinates)
    useEffect(() =>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/amirrezaalasti/cl0uwzpdv00nl14qyp8r4gouc',
            center: [51.692,35.411],
            zoom: 5,
        })
        if (pickupCoordinates) {
          addToMap(map, pickupCoordinates)
        }
        if (dropoffCoordinates) {
          addToMap(map, dropoffCoordinates)
        }
        if (pickupCoordinates && dropoffCoordinates){
          map.fitBounds([dropoffCoordinates, pickupCoordinates],{
            padding: 60,
          })
        }
    },[pickupCoordinates, dropoffCoordinates])
    const addToMap = (map, coordinates) => {
      const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
    }
    return (
      <div className={style.wrapper} id='map' />
    )
}

export default Map