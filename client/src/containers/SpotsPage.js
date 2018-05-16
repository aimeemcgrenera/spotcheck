import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchSpots } from '../actions/spots';
import SpotsList from '../components/SpotsList';
import { bindActionCreators } from 'redux'

class SpotsPage extends React.Component {

  componentDidMount() {
    if (this.props.spots.length === 0){
      this.props.actions.fetchSpots()
    }
  }


  render() {
    const spots = this.props.spots
    return (
      <div className="SpotsContainer">
        <SpotsList spots={spots} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('in map state to props')
  return {spots: state.spots}
}

// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(actions, dispatch) }
// }

export default connect(mapStateToProps, {fetchSpots})(SpotsPage);
