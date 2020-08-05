import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDateTime } from '../utils';

export default function EventCard({
  id,
  title,
  startTime,
  duration,
  description,
  mastheadUrl,
  subTitle,
  joiningUrl,
}) {
  const formattedDateTime = getFormattedDateTime(startTime);
  return (
    <div className="m-3  sm:w-full md:w-2/3 lg:w-3/10 bg-white outline-none border-transparent shadow-xs hover:shadow-2xl rounded-lg cursor-pointer">
      <div className="p-6">
        <img className="w-full" src={mastheadUrl} alt={title} />
        <h3 className="mt-8 text-center text-xl font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-center uppercase ">{formattedDateTime}</p>
        {/* <p className="pt-4 text-gray-700 text-justify">{subTitle}</p> */}
      </div>

      <div className="action w-full">
        <a
          href={joiningUrl}
          target="_blank"
          className="block btn btn-indigo w-3/4 mx-auto mb-4 text-center"
        >
          Book your seat!
        </a>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  mastheadUrl: PropTypes.string,
  subTitle: PropTypes.string,
};

EventCard.defaultProps = {
  mastheadUrl: '',
  subTitle: '',
};
