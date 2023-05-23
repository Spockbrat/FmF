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


function CreateSubscriberForm({ showFirstName, showLastName, newsletter }: { showFirstName: boolean, showLastName: boolean, newsletter: boolean }) {
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
  
      await createSubscriber(client, subscriber);
  
      setEmail('');
      setFirstName('');
      setLastName('');
      setSubmitted(true);
    };
  
    if (submitted) {
      return (
        <p>
          {newsletter
            ? 'You have successfully subscribed to our newsletter!'
            : 'Thank you for signing up!'}
        </p>
      );
    }
  
    return (
      <form onSubmit={onSubmit} className="w-full">
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
  
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
  
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
  
  export default CreateSubscriberForm;
