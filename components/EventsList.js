import React from 'react';
import EventCard from './EventCard';
import events from '../pages/api/data/events';
import speakers from '../pages/api/data/speakers';
import { getRandomIllustrationUrl } from '../utils';

const getEventsContent = () => {
  const previousEventsContent = [];
  const upcomingEventsContent = [];
  const currentTimestamp = new Date().getTime();

  events.forEach(
    ({
      id,
      title,
      startTime,
      duration,
      description,
      mastheadUrl,
      subTitle,
      tags,
      joiningUrl,
    }) => {
      if (!mastheadUrl) {
        mastheadUrl = getRandomIllustrationUrl(tags[0]);
      }
      const eventContent = (
        <EventCard
          id={id}
          key={id}
          title={title}
          startTime={startTime}
          duration={duration}
          description={description}
          mastheadUrl={mastheadUrl}
          subTitle={subTitle}
          joiningUrl={joiningUrl}
        />
      );
      if (new Date(startTime).getTime() >= currentTimestamp) {
        upcomingEventsContent.push(eventContent);
      } else {
        previousEventsContent.push(eventContent);
      }
    }
  );
  return [upcomingEventsContent, previousEventsContent];
};

export default function EventsList() {
  const [upcomingEventsContent, previousEventsContent] = getEventsContent();
  return (
    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h2 className="text-xl text-gray-900">Upcoming events</h2>
      {/* <p className="text-gray-600">
        A selection of great work-friendly cities with lots to see and explore
      </p> */}
      <div className="flex flex-wrap -mx-4">{upcomingEventsContent}</div>
      <h2 className="text-xl text-gray-900">Previous events</h2>
      <div className="flex flex-wrap -mx-4">{previousEventsContent}</div>
    </div>
  );
}
