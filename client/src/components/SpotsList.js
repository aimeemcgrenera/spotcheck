import React from 'react';

const SpotsList = ({spots}) => {

  function listSpots() {
    return spots.spots.map(spot => {
      return(
        <div key={spot.id}>
          <div className="SpotList">
            <h3>Previous Spots Entered:</h3>
            <p>{spot.address_number}</p>
            <p>{spot.street_direction}</p>. {spot.street_name}
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      {listSpots()}
    </div>
  );
};


export default SpotsList;
