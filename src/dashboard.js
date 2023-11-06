import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './dashboard.css'; // Import your custom CSS file
import axios from 'axios';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('Getting files...');

  useEffect(() => {
    // Simulate an asynchronous process with a timeout
    const delay = 30000; // 3 seconds (adjust as needed)
    const loadingTexts = ['Getting files...', 'Checking files...', 'Doing SHA verification...', 'Memory Verification Going On...'];

    const loadingInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * loadingTexts.length);
      setLoadingText(loadingTexts[randomIndex]);
    }, 1500); // Change text every 1.5 seconds

    setTimeout(() => {
      clearInterval(loadingInterval); // Stop changing loading text
      setIsLoading(false);
    }, delay);
  }, []);

  const currentDate = new Date();

  // Define options for formatting
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // 24-hour format
    timeZoneName: 'short', // Time zone abbreviation
  };

  // Format the date and time
  const formattedDateTime = new Date(currentDate.getTime() - 295437).toLocaleString('en-US', options);

  return (
    <Container className="dashboard">
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner" />
          <p className="loading-text">{loadingText}</p>
        </div>
      ) : (
        <>
          <Row>
            <Col>
              <h4>Security Checks Dashboard</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>Date Scan Started: {formattedDateTime}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="searchText">
                  <Form.Label>Search Code Pattern</Form.Label>
                  <Form.Label> b"\x0f\x22\xc0" # mov %rax,%cr0</Form.Label>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Data Pattern Searched:</h5>
              <pre>b"reptile/reptile", b"ROOTKIT syscall_table",</pre>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Rootkits Searched:</h5>
              <p>489 rootkits</p>
            </Col>
            <Col>
              <h5>Rootkits Detected:</h5>
              <p>1 detected, Diamorphine</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Files Checked:</h5>
              <p>120 files</p>
            </Col>
            <Col>
              <h5>Files Corrupted Found:</h5>
              <p>3 files</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Memory Verification:</h5>
              <h6>Check Failed</h6>
              <p>1965 bytes on disk</p>
              <p>3000 bytes using I/O methodology</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Other Info:</h5>
              <p>SHA256 checksum verification failed for 2 files</p>
              <p>ALL TCP Ports checked and found clean, possible contamination port 3658</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p></p>
              <h5>All Rights Reserved. Copyright belongs to KRSA inc.</h5>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
