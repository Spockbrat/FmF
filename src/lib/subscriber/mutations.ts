import { SupabaseClient, PostgrestSingleResponse } from '@supabase/supabase-js';
import { SUBSCRIBER_TABLE } from '~/lib/db-tables';
import { Subscriber } from '~/lib/subscriber/types/subscriber';

export async function createSubscriber(
  client: SupabaseClient,
  subscriber: Subscriber
): Promise<PostgrestSingleResponse<Subscriber> | null> {
  const { data, error } = await client
    .from(SUBSCRIBER_TABLE)
    .insert([
      {
        firstName: subscriber.first_name,
        lastName: subscriber.last_name,
        email: subscriber.email,
        fmf: subscriber.fmf,
        newsletter: subscriber.newsletter,
      },
    ]);

  if (error) {
    throw new Error('Failed to create subscriber');
  }

  return data;
}
