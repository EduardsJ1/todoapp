import React, { use } from 'react'
import type { User } from '@/types/users'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
const UserCard = ({user}:{user:User}) => {
  return (
    <Card className='flex-1/5 sm:min-w-[320px]'>
        <CardHeader>
            <CardTitle>{user.username}</CardTitle>
            <CardDescription>{user.name}</CardDescription>
        </CardHeader>

        <CardContent>
            <div className='border-b'>
                <p className='flex justify-between gap-1'>Email:<span>{user.email}</span></p>
                <p className='flex justify-between gap-1'>Phone:<span>{user.phone}</span></p>
                <p className='flex justify-between gap-1'>Website:<span>{user.website}</span></p>
            </div>
            <div className='mt-5'>
                <p>Adress:</p>
                <p className='text-right'>
                    {user.address.street}, {user.address.suite},<br/>
                    {user.address.city}, {user.address.zipcode}
                </p>
            </div>
        </CardContent>

        <CardFooter>
            <div>Footer</div>
        </CardFooter>
    </Card>
  )
}

export default UserCard
