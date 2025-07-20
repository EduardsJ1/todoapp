import React from 'react'
import type { User } from '@/types/users';
import { getUsers } from '@/app/api/users';
import UserCard from '../components/UserCard';
import MainLayot from '@/layouts/MainLayot';
const User =async ({params}:{params:Promise<{id:string}>}) => {
    const resolvedParams = await params;
    const userId=Number(resolvedParams.id)
    const users:User[]=await getUsers({id:userId});
    const user:User=users[0];
  return (
    <MainLayot className='mt-5'>
        <div>
            <UserCard user={user}/>
        </div>
    </MainLayot>
  )
}

export default User
