import './App.css';
import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import InfoPage from './components/Info_Page'
import InformationPage from './components/InformationPage';
import { Container, Col, Row, Card } from 'react-bootstrap'
import axios from 'axios'


function App() {
  const [users, setUsers] = useState([])

  const getUserList = async () => {
    try { 
      const response = await axios.get('/api/v1/login/')
      const { data } = response
      setUsers(data)
    } catch (err) {
      console.log(err)
    }
  }

  const AddUserList = async newUser => {
    try {
      console.log(newUser)
      const response = await axios.post('/api/v1/login/', newUser)
      getUserList()
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserList()
  }, [])

  return (
  <div className="wrapper"> 
  <InformationPage/>
    {/* <Container>
      <Row className="justify-content-center pt-5">
        <Col>
          <Card className="pt-5">
            <Login addUser={ AddUserList }/> 
            { users.map((user, index) => (
              <InfoPage key={ user.id } id={ user.id } username={ user.username } email={ user.email } password={ user.password }/>
            )) }
          </Card>
        </Col>
      </Row>
    </Container> */}
  </div>
  );
}

export default App;
