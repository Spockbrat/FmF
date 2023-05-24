import { SupabaseClient, PostgrestSingleResponse } from '@supabase/supabase-js';
import { SUBSCRIBER_TABLE } from '~/lib/db-tables';
import { Subscriber } from '~/lib/subscriber/types/subscriber';

import type { Database } from '../../database.types';

type Client = SupabaseClient<Database>;

export async function createSubscriber(
  client: Client,
  subscriber: Partial<Subscriber>
): Promise<PostgrestSingleResponse<Subscriber> | null> {
  const { data, error } = await client
    .from(SUBSCRIBER_TABLE)
    .insert([
      {
        first_name: subscriber.first_name,
        last_name: subscriber.last_name,
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
