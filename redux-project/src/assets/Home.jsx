import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { useNavigate,Link } from 'react-router-dom';
import { deleteUser } from './UserRedcucer';

function Home() {
    const users = useSelector(state => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch(); // Initialize useDispatch
 
    
    const handleClickCreate = () => {
        navigate("/create");
    };
    const handleDelete = (userId) => {
        dispatch(deleteUser({ id: userId })); // Dispatch deleteUser action with user id
    };

    return (
        <div className='d-flex justify-content-center align-items-start flex-column'>
            <div className='container'>
                <h2 className='my-4'>Crud Operation With Redux</h2>
                <button className='btn btn-success mb-3' onClick={handleClickCreate}>
                    Create +
                </button>
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map through userList and display each user */}
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                              <Link to={`/edit/${user.id}`} className='btn btn-primary me-2' > Edit </Link>
                                        
                                
                                    <button className='btn btn-danger ms-2' onClick={() => handleDelete(user.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
