import { useState } from 'react';

import InputField from '../components/InputField';

function UserForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: null,
    email: null,
    password: null
  });

  const handleInputChange = (event) => {
    
  };

  const handleSubmit = (event) => {
    
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <InputField 
          label="Username" 
          type="text" 
          name="username" 
          value={formData.username} 
          error={errors.username} 
          onChange={handleInputChange} 
        />
        
        <InputField 
          label="Email" 
          type="text" 
          name="email" 
          value={formData.email} 
          error={errors.email} 
          onChange={handleInputChange} 
        />
        
        <InputField 
          label="Password" 
          type="password" 
          name="password" 
          value={formData.password} 
          error={errors.password} 
          onChange={handleInputChange} 
        />
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}



export default UserForm;
