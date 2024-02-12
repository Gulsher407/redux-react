import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from './UserRedcucer';

function Create() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const [user, setUser] = useState({ name: '', email: '', id: '' });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(addUser({ id: users.length > 0 ? users[users.length - 1].id + 1 : 1, name: user.name, email: user.email }));
        navigate("/");
    };

    return (
        <div className='container d-flex justify-content-center align-items-center h-100' style={{marginTop:"10px"}} >
            <div className='border p-5' style={{ maxWidth: '400px' }}>
                <h2 className='mb-4'>Create User</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group mb-3'>
                        <label htmlFor='name'>Name:</label>
                        <input
                            type='text'
                            className='form-control'
                            name='name'
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor='email'>Email:</label>
                        <input
                            type='email'
                            className='form-control'
                            name='email'
                            value={user.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type='submit' className='btn btn-primary btn-block'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Create;
