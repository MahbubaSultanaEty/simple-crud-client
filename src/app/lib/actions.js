import { revalidatePath } from "next/cache";

export const createUser = async (formData) => {
    'use server';
    const newUser = Object.fromEntries(formData.entries()
    )
    console.log("new user data", newUser);
    const res = await fetch('http://localhost:7000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    const data = await res.json();
    console.log('data after post', data);

    // TODO: revalidate the path
    if (data.insertedId) {
        revalidatePath('/users')
    }
    return data
}


export const updateUser = async (formData) => {
    'use server';
    const updatedUser = Object.fromEntries(formData.entries);
    const res = await fetch(``, {
        method: 'PATCH',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(updateUser)
    });
    const data = await res.json();
    console.log('after', data);
    // revalidate
}


export const deleteUser = async (userId) => {
    'use server';

    const res = await fetch(`http://localhost:7000/users/${userId}`, {
        method: 'DELETE'
    });
    const data = await res.json();

    // TODO: revalidation cache
    console.log("after delete", data);
    if (data.deletedCount > 0) {
        revalidatePath('/users')
    }
    return data
}