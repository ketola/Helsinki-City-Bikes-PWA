// @flow

import React from 'react'
import geolib from 'geolib'

type Props = {
  stations: array,
  geoposition: any
}

const Station = (props) => (
  <div className='bike-station'>
    <div className='title'>{props.station.name}</div>
    <div className='bikes'>Bikes: {props.station.bikesAvailable} / {props.station.bikesAvailable + props.station.spacesAvailable}</div>
    <div className='distance'>Distance: {props.geoposition.coords && geolib.getDistance( {latitude: props.geoposition.coords.latitude, longitude: props.geoposition.coords.longitude}, {latitude: props.station.y, longitude: props.station.x})} m</div>
  </div>
)

const BikeStation = ({ stations, geoposition }: Props) =>
  <div>
    <div>{stations && stations.map((st) => <Station station={st} geoposition={geoposition}  />)}</div>
  </div>

export default BikeStation
