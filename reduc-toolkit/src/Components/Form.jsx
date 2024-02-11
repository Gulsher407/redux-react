import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../assets/features/Userdetails';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [users, setUsers] = useState({ name: '', email: '', age: '', gender: '' });

  const handleChange = (e) => {
    setUsers({
      ...users,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await dispatch(createUser(users));
      toast.success('Form submitted successfully!');
      navigate('/read');
    } catch (error) {
      toast.error('Error submitting the form. Please try again.');
    }
  };

  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body shadow-lg">
              <h2 className="text-center mb-4">Fill the Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" name="name" value={users.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" value={users.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Age</label>
                  <input type="number" className="form-control" name="age" value={users.age} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="maleRadio" name="gender" value="male" onChange={handleChange} required />
                    <label className="form-check-label" htmlFor="maleRadio">Male</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="femaleRadio" name="gender" value="female" onChange={handleChange} required />
                    <label className="form-check-label" htmlFor="femaleRadio">Female</label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
