import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserDetailsPage = async ({ params }) => {
    const { userId } = await params;
    const user = await getUserById(userId);
    console.log(user);
    return (
        <div>
            <h2>Users Details</h2>
            <p>Users Name: { user.name}</p>
        </div>
    );
};

export default UserDetailsPage;