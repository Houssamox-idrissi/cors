import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "../../component/loading";

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/users`)
            .then(res => {
                setUsers(res.data.users);
                setLoading(false);
            })
            .catch(error => {
                console.log("Error fetching data", error);
            });
    }, []);

    const deleteUser = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/users/${id}`)
            .then(res => {
                setUsers(users.filter(user => user.id !== id));
                alert("User deleted successfully");
            })
            .catch(error => {
                console.log("Error deleting user", error);
            });
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='mt-20 ml-80'>
            <table className="table-auto w-full">
                <thead className="text-white">
                    <tr>
                        <th className="px-4 py-2" style={{ fontStyle: 'italic' }}>First Name</th>
                        <th className="px-4 py-2" style={{ fontStyle: 'italic' }}>Last Name</th>
                        <th className="px-4 py-2" style={{ fontStyle: 'italic' }}>Post</th>
                        <th className="px-4 py-2" style={{ fontStyle: 'italic' }}>Lieu</th>
                        <th className="px-4 py-2" style={{ fontStyle: 'italic' }}>Ville</th>
                        <th className="px-4 py-2" style={{ fontStyle: 'italic' }}>Email</th>
                        <th className="px-4 py-2" style={{ fontStyle: 'italic' }}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="text-center">
                            <td className="border px-4 py-2">{user.firstName}</td>
                            <td className="border px-4 py-2">{user.lastName}</td>
                            <td className="border px-4 py-2">{user.post}</td>
                            <td className="border px-4 py-2">{user.lieu}</td>
                            <td className="border px-4 py-2">{user.ville}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                            <td>
                                <button type="button" onClick={() => deleteUser(user.id)} className="inline-block w-6 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
