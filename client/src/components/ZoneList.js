import React from 'react';
import ZoneSearch from './ZoneSearch';
import SpotNew from '../containers/SpotNew';
import './Index.css';
import Counter from './Counter';

function ZoneList(props) {
  const zones = props.zones.map((zone) =>
    <div key={zone.id}>
      <p class="text-danger">Zone number: {zone.zone}</p>
      <h6>Number Range: {zone.address_range_low}  -  {zone.address_range_high}</h6>
      <h6>Street: {zone.street_direction} {zone.street_name}</h6>
      <Counter /><br />
      -----------------------------------------
    </div>
  );
  return(
    <div>
      {zones}
    </div>
  )
}

export default ZoneList;
