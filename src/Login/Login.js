import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Login = () => {
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext);
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
        form.reset()
      })
      .catch(e => {
        console.error(e);
        setError(e.message);
      })
  }

  return (
    <div>
      <Form onSubmit={handleLogInSubmit}>
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