// @flow

import React from 'react'
import GoogleMapReact from 'google-map-react'


type Props = {
  latitude: number,
  longitude: number,
  stations: array
}

const defaultCenter = (props) => {
  return {lat: Number.parseFloat(props.location.query.latitude), lng: Number.parseFloat(props.location.query.longitude)}
}

const defaultZoom = () => 18

const Marker = (props) =>
  <div className='map-marker'>
    {props.station.name}
  </div>

const SimpleMap = (props) =>
  <div className='google-map'>
    <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyB4SWt00LABjHhWjk-Ib6KsXdWFnIQcuOY'}}
        defaultCenter={defaultCenter(props)}
        defaultZoom={defaultZoom()}>
        {props.stations.map((st) => <Marker station={st} lat={st.y} lng={st.x} />)}
    </GoogleMapReact>
  </div>

export default SimpleMap