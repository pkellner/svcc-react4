import React from 'react';
import PropTypes from 'prop-types';

export default function SpeakerListItem(props) {
  const { id, firstName, lastName, company, imageUrl } = props;

  const img = () => {
    if (process.env.NODE_ENV === 'development') {
      return (
        <img
          src={`assets/images/speakers/Speaker-${id}.jpg`}
          alt="{this.props.firstName} {this.props.lastName}"
        />
      );
    }
    return (
      <img src={imageUrl} alt="{this.props.firstName} {this.props.lastName}" />
    );
  };

  return (
    <div className="col-12 col-sm-6 speakers-list-item">
      <div className="events-speaker d-flex align-items-center">
        <div className="events-speaker-photo">{img()}</div>
        <div className="events-speaker-description">
          <div className="name">
            {firstName} {lastName}
          </div>
          <div className="profession">{company}</div>
        </div>
      </div>
    </div>
  );
}

SpeakerListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  company: PropTypes.string,
  imageUrl: PropTypes.string,
};
