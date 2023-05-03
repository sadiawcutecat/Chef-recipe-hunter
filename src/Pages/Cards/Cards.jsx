// import React from 'react';

import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Cards = () => {
    // eslint-disable-next-line no-unused-vars
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefData')
            .then(res => res.json())
            .then(data => {
                setChefData(data);
                console.log(data); // Logs the fetched data to the console
            })
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            {/* <div>
            {chefData.map(item => (
                <p key={item.id}>{item.name}</p>
            ))}
        </div> */}

            <div>
                <Row xs={1} md={3} className="g-4">

                    <Col>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default Cards;