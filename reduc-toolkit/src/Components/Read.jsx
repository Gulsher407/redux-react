import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showUsers, deleteUser } from '../assets/features/Userdetails';
import CustomModal from './CustomModel';
import { Link } from 'react-router-dom';

function Read() {
    const [selectedUserId, setSelectedUserId] = useState(null); // Initialize selectedUserId state with null
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector(state => state.app);

    useEffect(() => {
        dispatch(showUsers());
    }, [dispatch]);

    return (
        <div className="container">
            <h2 className="text-center mt-5 text-primary">All Data</h2>
            {loading && <p className="text-center mt-3 text-secondary">Loading...</p>}
            {error && <p className="text-center text-danger mt-3">Error: {error}</p>}
            <div className="row justify-content-center mt-3">
                {users && users.map(user => (
                    <div key={user.id} className="col-md-12">
                        <div className="card mb-3 bg-light">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="card-title text-primary"><span style={{fontWeight:"bold" }}>  Name : </span>{user.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted"> <span style={{color:"black",fontWeight:"bold" }}>  Email : </span>{user.email}</h6>
                                    <p className="card-text"><span style={{color:"black",fontWeight:"bold" }}>  Gender : </span> {user.gender}</p>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-primary me-2" onClick={() => setSelectedUserId(user.id)}>View</button>
                                    <Link to={`/edit/${user.id}`} className="btn btn-success me-2 card-link">Edit</Link>
                                    <button onClick={() => dispatch(deleteUser(user.id))} className="btn btn-danger ms-2">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Render CustomModal outside the loop */}
            {selectedUserId && <CustomModal id={selectedUserId} setShowPopup={setSelectedUserId} />}
        </div>
    );
}

export default Read;
