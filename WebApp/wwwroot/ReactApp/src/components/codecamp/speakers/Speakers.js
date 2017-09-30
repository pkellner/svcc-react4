import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SpeakersHeader from './SpeakersHeader';
import SpeakerList from './SpeakerList';
import { load } from '../../../actions/speakers';

class Speakers extends Component {
  componentWillMount() {
    this.props.loadSpeakers();
  }

  render() {
    return (
      <div>
        <div>PETER WAS HERE</div>
        <SpeakersHeader />
        <SpeakerList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.speakers.isLoading,
  speakers: state.speakers.data,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadSpeakers: load }, dispatch);

Speakers.propTypes = { loadSpeakers: PropTypes.func };

export default connect(mapStateToProps, mapDispatchToProps)(Speakers);
