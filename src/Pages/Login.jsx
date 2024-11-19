import React, { useState } from 'react';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const navigate = useNavigate(); // Initialize the navigation hook
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password

  // Handle form submission
  const handleLogin = () => {
    // You can add authentication logic here
    if (email && password) {
      // If credentials are valid, navigate to dashboard
      navigate('/dashboard');
    } else {
      alert('Please enter valid credentials'); // Optional error handling
    }
  };

  return (
    <main>
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 7, // margin top & bottom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: '10px 20px',
          boxShadow: '9px 12px',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>
        </div>

        {/* Email Input */}
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
        </FormControl>

        {/* Password Input */}
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
        </FormControl>

        {/* Log in Button */}
        <Button sx={{ mt: 1 }} onClick={handleLogin}>
          Log in
        </Button>

        {/* Sign-up Link */}
        <Typography
          endDecorator={<Link to="/sign-up">Sign up</Link>}
          sx={{ fontSize: 'sm', alignSelf: 'center' }}
        >
          Don&apos;t have an account?
        </Typography>
      </Sheet>
    </main>
  );
}

export default Login;
