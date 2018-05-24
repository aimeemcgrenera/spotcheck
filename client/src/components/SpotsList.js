import React from 'react';

function SpotsList(props) {
    const sortedSpots = props.spots.sort(function (a,b){
      if(a.street_name < b.street_name)
        return -1
      if(a.street_name > b.street_name)
        return 1
      return 0
    })
    const spots = sortedSpots.map((spot) =>
        <div key={spot.id}>
            <h6>{spot.address_number} {spot.street_direction}. {spot.street_name}</h6>
            -----------------------------------------
        </div>
      )

  return (
    <div>
      {spots}
    </div>
  );
};


export default SpotsList;
