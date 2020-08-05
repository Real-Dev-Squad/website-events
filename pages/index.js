import Head from 'next/head';
import EventsList from '../components/EventsList';

export default function Home() {
  return (
    <div className="bg-gray-300 container min-h-screen min-w-full">
      <EventsList />
    </div>
  );
}
