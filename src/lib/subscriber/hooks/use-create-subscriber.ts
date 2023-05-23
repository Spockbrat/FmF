import { useSWRConfig } from 'swr';
import { useRouter } from 'next/navigation';
 
import useSupabase from '~/core/hooks/use-supabase';
import { createSubscriber } from '~/lib/subscriber/mutations';
import type { Subscriber } from '~/lib/subscriber/types/subscriber';
 


function useCreateSubscriberMutation() {
    const client = useSupabase();
    const { mutate } = useSWRConfig();
  
    const createSubscriberMutation = async (subscriber: Subscriber, onSuccess: () => void) => {
      await createSubscriber(client, subscriber);
  
      // Invalidate the data to trigger revalidation
      mutate('subscriber');

       // Call the onSuccess callback
    onSuccess();
    };
  
    return createSubscriberMutation;
}


export default useCreateSubscriberMutation;