import React from 'react';
import PropTypes from 'prop-types';

const Details = ({ event }) => {
  return (
    <div>
      <h2>Event Details</h2>
      <p>Title: {event.title}</p>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
    </div>
  );
};

Details.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Details;