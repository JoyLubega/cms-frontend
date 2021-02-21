import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../utils/constants';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

const PresentationList = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/presentations`);
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);


  return (
    <div className="files-container">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Container>
    <Row>
      {filesList.length > 0 ? 
          (
            filesList.map(
              ({ _id, title, description, files }) => (
                  <Col xs={6} md={4}>
                    <Card style={{ width: '18rem' }}>
                    <Carousel>
                    {
                    files.map((file)=>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={file}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            </Carousel.Caption>
                        </Carousel.Item>
                        )
                    }
                        </Carousel>
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    </Card.Body>
                </Card>
              </Col>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No Presentation found. Please add some.
              </td>
            </tr>
          )}
          </Row>
      </Container>
    </div>
  );
};

export default PresentationList;
