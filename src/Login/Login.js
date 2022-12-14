import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';

const Login = () => {
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext);
  useTitle('Login')

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


  const handleLogInSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        setError('');
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(e => {
        console.error(e);
        setError(e.message);
      })
  }

  return (
    <div className='d flex justify-content-center'>
      <Form onSubmit={handleLogInSubmit} className='mx-auto w-75 pt-3 fw-bolder'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3 text-bg-danger">
          {error}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  );
};

export default Login;