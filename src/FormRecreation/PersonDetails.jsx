function PersonDetails({ formData, setFormData }) {
  // handle change for each person field
  const handlePersonChange = (index, field, value) => {
    // make a shallow copy of the array so we don’t mutate state directly
    const updated = [...formData.persons];
    updated[index] = { ...updated[index], [field]: value };

    // update the state with the new array
    setFormData({
      ...formData,
      persons: updated,
    });
  };

  return (
    <div className="bg-white shadow rounded">
      <p className="text-muted px-3 pt-3">
        Please fill in all the names that will be on the voucher (including the guardian name).
      </p>
      
      {formData.persons && formData.persons.length > 0 &&
        formData.persons.map((person, index) => (
          
          <div>
            <hr />
              <div key={index} className="row g-3 mb-3 px-3">
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor={`name-${index}`} className="text-muted">Full Name</label>
                  <input
                    id={`name-${index}`}
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    value={person.name}
                    onChange={(e) => handlePersonChange(index, "name", e.target.value)}
                  />
                </div>

                {/* Ticket Type */}
                <div className="col-6 mb-3">
                  <label htmlFor={`type-${index}`} className="text-muted">Ticket Type</label>
                  <select
                    id={`type-${index}`}
                    className="form-select"
                    value={person.type}
                    onChange={(e) => handlePersonChange(index, "type", e.target.value)}
                  >
                    <option value="Adult">Adult</option>
                    <option value="Child">Child</option>
                  </select>
                  
                </div>  
              </div>
          </div>
          
        ))
      }
    </div>
  );
}

export default PersonDetails;
