import React from 'react';
import ZoneList from '../components/ZoneList';

class Zones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zones: []
    };
  }

  fetch(fetchZones().then(data => {
    this.setState({
      zones: data
    })
  )

  render() {}
    return (
      <div className="Zones">
        <h2>All Zones:</h2>
        <ZoneList zones={this.state.zones} />
        <p></p>
      </div>
    );
  }

};

export default Zones;
