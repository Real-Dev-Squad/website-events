import Head from 'next/head';
import DestinationList from '../components/DestinationsList';

export default function Home() {
  return (
    <div className="bg-gray-300 container min-h-screen min-w-full">
      {/* <div className="bg-gray-100 flex">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
          <div className="xl:max-w-lg xl:ml-auto">
            <img className="h-10" src="/workcation.svg" alt="Workcation logo " />
            <img
              src="/beach-work.jpg"
              alt="Women working on beach"
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br className="hidden lg:inline" />
              <span className="text-indigo-500">Take advantage of it </span>
            </h1>
            <p className="mt-2 text-gray-600 sm:text-xl sm:mt-4">
              Workcation helps you find work-friendly rentals in beautiful
              locations so can enjoy some nice weather even when you are not on
              Vacation
            </p>
            <div className="mt-4 sm:mt-6">
              <a href="#" className="btn btn-indigo sm:text-base shadow-lg mr-2">
                Book your escape
              </a>
              <a href="#" className="ml-2 btn btn-gray sm:text-base ">
                learn more
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img
            src="/beach-work.jpg"
            alt="Women working on beach"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
      </div> */}
      <DestinationList />
    </div>
  );
}
