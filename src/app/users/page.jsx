import UsersTable from '../components/UsersTable';
import { getUsers } from '../lib/data';

const UsersPage = async() => {
    const users = await getUsers();
    return (
        <div>
            <h1>Users Management : {users.length}</h1>          
            <UsersTable users={users}></UsersTable>
        </div>
    );
}

export default UsersPage;