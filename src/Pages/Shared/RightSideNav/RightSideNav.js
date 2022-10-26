import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-dark"><FaGoogle></FaGoogle>Login with Google</Button>
        <Button variant="outline-dark"><FaGithub></FaGithub>Login with Github</Button>
      </ButtonGroup>
      <div>
        <h3 className='my-2'>Find us</h3>
        <ListGroup>
          <ListGroup.Item className='mb-2'>Facebook</ListGroup.Item>
          <ListGroup.Item className='mb-2'>Whatsapp</ListGroup.Item>
          <ListGroup.Item className='mb-2'>Twitter</ListGroup.Item>
          <ListGroup.Item className='mb-2'>Printerest</ListGroup.Item>
          <ListGroup.Item className='mb-2'>Youtube</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightSideNav;