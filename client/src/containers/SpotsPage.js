import React, from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchSpots } from '../actions/spots';
import SpotsList from '../components/SpotsList';

class SpotsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spots: []
    };
  }

  componentDidMount() {
    fetch('/api/spot', {
      method: 'GET',
      accept: 'application/json'
    })
      .then(response => response.json())
      .then((spots) => {
        this.setState({
          spots: spots
        })
      })
      .catch(error => console.log(error));
  }

  render() {

    return (
      <div className="SpotsContainer">
        <SpotsList spots={this.state.spots} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    spots: state.spots
  };
}

export default connect(mapStateToProps, { fetchSpots })(SpotsPage);
