import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Sidenav from './Sidenav';

export default function Dashboard() {
  return (
    <div>
      {/* Top Navbar */}
      <Row bg="dark" text="light" fixed="top" >
          <div className='container fluid'> Dashboard</div>
      </Row>
      <Container>
        <Row>
          {/* Sidebar */}
          <Col sm={2} className="bg-light vh-100 pt-5">
             <Sidenav/>
          </Col>
          {/* Main Content */}
          <Col sm={10} className="pt-5" >
              {/* Add spacing to account for the fixed navbar */}
              <h1>Welcome to the Dashboard</h1>
              <p>
                This is the main content area. Replace this with your actual content.
              </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
