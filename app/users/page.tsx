import React from 'react'
import { getUsers } from '../api/users';
import type { User } from '@/types/users';
import UserCard from './components/UserCard';
import MainLayot from '@/layouts/MainLayot';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
const Users = async () => {
    const users:User[]=await getUsers()
  return (
    <MainLayot>
        <div className='flex gap-5 flex-wrap mt-5 justify-center w-full'>
        {users.map((user)=>(
            <UserCard key={user.id} user={user}>
              <Button><Link href={`/users/${user.id}`}>User Info</Link></Button>
            </UserCard>
        ))}
        </div>
    </MainLayot>
  )
}

export default Users
