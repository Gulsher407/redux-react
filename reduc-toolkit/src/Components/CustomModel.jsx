import React from "react";
import { useSelector } from "react-redux";

const CustomModal = ({ id, setShowPopup }) => {
  const allusers = useSelector((state) => state.app.users);

  const singleUser = allusers.filter((user) => user.id === id);
  console.log("singleuser", singleUser);

  const formatName = (name) => {
    return name.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  let [capitalizedFirstName, capitalizedLastName] = singleUser[0].name.split(' ');
  capitalizedFirstName = formatName(capitalizedFirstName);
  capitalizedLastName = capitalizedLastName ? formatName(capitalizedLastName) : ''; // Handle case where last name is null

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{capitalizedFirstName} {capitalizedLastName}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowPopup(false)}></button>
          </div>
          <div className="modal-body">
            <p><strong>Email:</strong> {singleUser[0].email}</p>
            <p><strong>Age:</strong> {singleUser[0].age}</p>
            <p><strong>Gender:</strong> {singleUser[0].gender}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
