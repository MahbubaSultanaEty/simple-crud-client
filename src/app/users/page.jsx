import AddUserModal from '../components/AddUserModal';
import UsersTable from '../components/UsersTable';
import { deleteUser } from '../lib/actions';
import { getUsers } from '../lib/data';

const UsersPage = async() => {
    const users = await getUsers();
    return (
        <div>
            <div className='flex justify-between m-4'>
                <h1>Users Management : {users.length}</h1> 
                <AddUserModal/>
            </div>
                    
            <UsersTable deleteUserAction={deleteUser} users={users}></UsersTable>
        </div>
    );
}

export default UsersPage;