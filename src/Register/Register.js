import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';

const Register = () => {
  const [error, setError] = useState('');
  const { createUser } = useContext(AuthContext);
  useTitle('Register');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photoUrl);

    createUser(email, password)
      .then(result => {
        const user = result.user;
        setError('');
        form.reset();
      })
      .catch(e => {
        console.error(e);
        setError(e.message)
      })
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>PhotoUrl</Form.Label>
          <Form.Control name='photoUrl' type="text" placeholder="Photo URL" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
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

export default Register;