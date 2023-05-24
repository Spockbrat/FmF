'use client';

import useSupabase from '~/core/hooks/use-supabase';
import { useRouter } from 'next/navigation';
import type { FormEventHandler } from 'react';
import { useCallback } from 'react';
import toaster from 'react-hot-toast';
import useSWR from 'swr';

import TextField from '~/core/ui/TextField';
import Button from '~/core/ui/Button';
import useCreateSubscriberMutation from '~/lib/subscriber/hooks/use-create-subscriber';
import { boolean } from 'zod';
 

import { useState } from 'react';
import { createSubscriber } from '~/lib/subscriber/mutations';
import type { Subscriber } from '~/lib/subscriber/types/subscriber';
import SlideUpTransition from '~/core/ui/SlideUpTransition';


function CreateSubscriberForm({ showFirstName, showLastName, newsletter, onClose, }: { showFirstName: boolean, showLastName: boolean, newsletter: boolean, onClose: () => void }) {
    const client = useSupabase();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [submitted, setSubmitted] = useState(false);
  
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
  
      const subscriber: Subscriber = {
        email,
        first_name: showFirstName ? firstName : '',
        last_name: showLastName ? lastName : '',
        newsletter: newsletter ? true : null,
        fmf: newsletter ? null : true
      };
  /* 
      await createSubscriber(client, subscriber);
  
      setEmail('');
      setFirstName('');
      setLastName('');
      setSubmitted(true);
      onClose();

      console.log('Form submitted'); */

      try {
        await createSubscriber(client, subscriber);
  
        // Clear form input values and set submitted state
        setEmail('');
        setFirstName('');
        setLastName('');
        setSubmitted(true);
      } catch (error) {
        // Handle error if the form submission fails
        console.log('Error:', error);
      }
    };


    if (submitted) {
      console.log('Form submitted success');
      return (
        <p>
          {newsletter
            ? 'You have successfully subscribed to our newsletter!'
            : <SlideUpTransition>
              <p className={'text-base font-semibold tracking-wider text-blue-600 mt-8 transition duration-700 ease-in-out'}>
                Thank you for your interest!<br></br> You will recieve an invite in your email shortly</p>
              </SlideUpTransition>}
        </p>
      );
    }
  
    return (
      <SlideUpTransition>
      <div>
  
      <form onSubmit={onSubmit} className={'relative mt-8 sm:mt-10  rounded-full sm:mt-12'}>
        {showFirstName && (
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        )}
  
        {showLastName && (
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        )}
  
        <div className={'relative p-2 rounded-full sm:border sm:border-gray-400 group sm:rounded-xl sm:focus-within:ring-1 sm:focus-within:ring-gray-900 sm:focus-within:border-gray-900'}>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder='email address here'
            className={'block w-full px-4 py-4 text-gray-900 placeholder-gray-900 bg-transparent border border-gray-400 outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 rounded-xl sm:border-none sm:focus:ring-0 sm:focus:border-transparent'}
          />
        </div>
  
        <div className={'mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-2'}>
          <button type="submit" className={'inline-flex round px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-600 font-pj hover:bg-gray-600'}>Submit</button>
        </div>
      </form>
      </div>
      </SlideUpTransition>
    );
  }
  
  export default CreateSubscriberForm;
