import { redirect } from 'next/navigation';
import type { SupabaseClient } from '@supabase/supabase-js';
import verifyRequiresMfa from '~/core/session/utils/check-requires-mfa';
import configuration from '~/configuration';

/**
 * @name requireSession
 * @description Require a session to be present in the request
 * @param client
 */
async function requireSession(client: SupabaseClient) {
  const { data, error } = await client.auth.getSession();

  if (!data.session || error) {
    throw redirect(configuration.paths.signIn);
  }

  const requiresMfa = await verifyRequiresMfa(client);

  // If the user requires multi-factor authentication,
  // redirect them to the page where they can verify their identity.
  if (requiresMfa) {
    throw redirect(configuration.paths.signInMfa);
  }

  return data.session;
}

export default requireSession;
