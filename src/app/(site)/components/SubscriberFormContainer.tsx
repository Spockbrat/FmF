'use client'
import { useState } from 'react';
import SubscriberForm from './SubscriberForm';
import CreateSubscriberForm from './SubscriberForm';
import If from '~/core/ui/If';

export default function SubscriberFormContainer({ showFirstName, showLastName, newsletter }: { showFirstName: boolean, showLastName: boolean, newsletter: boolean }) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleFormClose = () => {
    console.log('Form close called'); // Debug statement
    setIsFormVisible(false);
  };

  return (
    <div>
      {isFormVisible || newsletter ? (
       <CreateSubscriberForm
        showFirstName={showFirstName}
        showLastName={showLastName}
        newsletter={newsletter}
        onClose={handleFormClose}/>
      ) : (
        <If condition={!isFormVisible && !newsletter}>
            <button onClick={toggleVisibility} 
              className={'inline-flex text-lg justify-center w-1/2 h-1/4  text-center py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-12 hover:bg-yellow-400 focus:bg-yellow-400'} >
              Find My Fit</button>
        </If>
        
        
      )}
    </div>
  );
}