import { signOutAction } from '@/app/actions';
import { hasEnvVars } from '@/utils/supabase/check-env-vars';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { User } from '@supabase/supabase-js';

export default async function AuthButton({ user }: { user: User }) {
  if (!hasEnvVars) {
    return (
      <>
        <div className='flex items-center gap-4'>
          <div></div>
          <div className='flex gap-2'>
            <Button
              asChild
              size='sm'
              variant={'outline'}
              disabled
              className='pointer-events-none cursor-none opacity-75'
            >
              <Link href='/sign-in'>Sign in</Link>
            </Button>
            <Button
              asChild
              size='sm'
              variant={'default'}
              disabled
              className='pointer-events-none cursor-none opacity-75'
            >
              <Link href='/sign-up'>Sign up</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }
  return user ? (
    <div className='flex items-center gap-4 text-sm'>
      Hey, {user.email}!
      <form action={signOutAction}>
        <Button type='submit' variant={'outline'}>
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className='flex gap-2'>
      <Button asChild size='sm' variant='outline'>
        <Link href='/sign-in'>Sign in</Link>
      </Button>
    </div>
  );
}
