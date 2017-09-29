import React from 'react';
import PropTypes from 'prop-types';

export default function SponsorPageBottomItem(props) {
  const { id, sponsorName } = props;
  return (
    <img
      width="150"
      src={`assets/images/sponsors/Sponsor-${id}.jpg`}
      alt={sponsorName}
    />
  );
}

SponsorPageBottomItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sponsorName: PropTypes.string,
};
