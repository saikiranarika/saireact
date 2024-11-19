import React, { useState } from 'react';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link, useNavigate } from 'react-router-dom'; 
function Login() {
  const [fullName, setFullName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 

    
    if (!fullName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    
    if (email.includes('@') && password.length >= 6) {
      
      alert('Registration successful! You can now log in.');
      navigate('/'); // Redirect to login page
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <main>
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', 
          my: 10, 
          py: 3, 
          px: 2, 
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: '10px 20px',
          boxShadow: '10px 12px',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Register to continue.</Typography>
        </div>

        {/* Full Name Input */}
        <FormControl>
          <FormLabel>Full Name:</FormLabel>
          <Input
            name="fullName"
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)} // Update state on change
          />
        </FormControl>

        {/* Email Input */}
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="Enter user id"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on change
          />
        </FormControl>

        {/* Password Input */}
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on change
          />
        </FormControl>

       
        {error && <Typography sx={{ color: 'red' }}>{error}</Typography>}

        {/* Submit Button */}
        <Button sx={{ mt: 1 }} onClick={handleSubmit}>Submit</Button>

        {/* Link to Login page */}
        <Typography
          endDecorator={<Link to="/">login</Link>}
          sx={{ fontSize: 'sm', alignSelf: 'center' }}
        >
          Already have an account?
        </Typography>
      </Sheet>
    </main>
  );
}

export default Login;
