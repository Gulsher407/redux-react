import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from './UserRedcucer';

function EditUser() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams(); // Get the id from URL params

    // Assuming you have access to the user data you want to edit
    const users = useSelector(state => state.users);
    const user = users.find(user => user.id === parseInt(id));

    // If user not found or id is not a number, handle appropriately (e.g., show error message, redirect, etc.)
    if (!user) {
        // Handle case where user is not found
        // For example, navigate back to home page
        navigate("/");
        return null; // Render nothing or an error message
    }

    const [updateData, setUpdateData] = useState({
        name: user.name,
        email: user.email
    });

    useEffect(() => {
        if (id) {
            const singleUser = users.find((ele) => ele.id === parseInt(id));
            setUpdateData(singleUser);
        }
    }, []);

    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editUser({
            id: parseInt(id),
            newName: updateData.name,
            newEmail: updateData.email
        }));
        navigate("/");
    };

    return (
        <div className='container'>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        className='form-control'
                        id='name'
                        name='name'
                        value={updateData.name}
                        onChange={newData}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        className='form-control'
                        id='email'
                        name='email'
                        value={updateData.email}
                        onChange={newData}
                        required
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
}

export default EditUser;
