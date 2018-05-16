import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchZones } from '../actions/zones';
import ZoneList from '../components/ZoneList';
import { bindActionCreators } from 'redux'

class ZonesPage extends React.Component {


  render() {
    const zones = this.props.zones
    debugger
    return (
      <div className="ZonesContainer">
        <Zones zones={zones} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('in map state to props')
  return {zones: state.zones}
}

// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(actions, dispatch) }
// }

export default connect(mapStateToProps, {fetchZones})(ZonesPage);
