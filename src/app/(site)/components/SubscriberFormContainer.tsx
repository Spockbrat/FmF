'use client'
import { useState } from 'react';
import SubscriberForm from './SubscriberForm';
import CreateSubscriberForm from './SubscriberForm';


export default function SubscriberFormContainer({ showFirstName, showLastName, newsletter }: { showFirstName: boolean, showLastName: boolean, newsletter: boolean }) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleFormClose = () => {
    console.log('Form close called'); // Debug statement
    setIsFormVisible(false);
  };

  return (
    <div>
      {isFormVisible ? (
       <CreateSubscriberForm
        showFirstName={showFirstName}
        showLastName={showLastName}
        newsletter={newsletter}
        onClose={handleFormClose}/>
      ) : (
        <button onClick={toggleFormVisibility} className={'inline-flex text-lg justify-center w-1/2 h-1/4  text-center py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-12 hover:bg-yellow-400 focus:bg-yellow-400'} >Join Us</button>
      )}
    </div>
  );
}