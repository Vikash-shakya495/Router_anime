import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [name, setName] =  useState('');
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(''); // State for password strength

  // Function to validate password
  const validatePassword = (password) => {
    let strength = '';
    if (password.length < 8) {
      strength = 'weak';
    } else if (!/[A-Z]/.test(password)) {
      strength = 'medium';
    } else if (!/[a-z]/.test(password)) {
      strength = 'medium';
    } else if (!/\d/.test(password)) {
      strength = 'strong';
    } else {
      strength = 'very strong';
    }
    setPasswordStrength(strength);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any submit logic
    setPassword('');
    setName('');

    navigate('/dashboard');

  };

  return (
    <div className="flex h-screen items-center justify-center bg-cover bg-center bg-fixed" style={{backgroundImage: `url('https://images4.alphacoders.com/133/1332281.jpeg')`, backgroundColor: '#3498db'}}>
      <div className="container w-2/6 mx-auto bg-white bg-opacity-60 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
        <form action='/dashboard' onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Contact Us</h2>
          <label htmlFor="name" className="font-semibold text-gray-800">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg"
            required
          />

          <label htmlFor="password" className="font-semibold text-gray-800">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            className={`px-4 py-2 border rounded-lg ${passwordStrength === 'weak' ? 'border-red-500' : passwordStrength === 'medium' ? 'border-yellow-500' : passwordStrength === 'strong' ? 'border-green-500' : 'border-transparent'}`}
            required
          />

          <div className="flex items-center">
            <div className="h-3 w-full bg-gray-200 rounded-lg overflow-hidden">
              <div
                className={`h-full ${passwordStrength === 'weak' ? 'bg-red-500' : passwordStrength === 'medium' ? 'bg-yellow-500' : passwordStrength === 'strong' ? 'bg-green-500' : 'bg-transparent'}`}
                style={{width: password.length < 8 ? '25%' : !/[A-Z]/.test(password) || !/[a-z]/.test(password) ? '50%' : !/\d/.test(password) ? '75%' : '100%'}}
              ></div>
            </div>
          </div>

          <div className={`text-sm text-${passwordStrength === 'weak' ? 'red-500' : passwordStrength === 'medium' ? 'yellow-500' : passwordStrength === 'strong' ? 'green-500' : 'gray-800'} mt-1`}>
            {password.length < 8 ? 'Password must be at least 8 characters long.' : !/[A-Z]/.test(password) ? 'Password must contain at least one uppercase letter.' : !/[a-z]/.test(password) ? 'Password must contain at least one lowercase letter.' : !/\d/.test(password) ? 'Password must contain at least one number.' : 'This is a strong password.'}
          </div>

          <input
            type="submit"
            value="Submit"
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 cursor-pointer w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
