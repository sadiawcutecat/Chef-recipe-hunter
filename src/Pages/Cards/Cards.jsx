// import React from 'react';

import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { AiFillLike } from "react-icons/ai";

const Cards = () => {
    // eslint-disable-next-line no-unused-vars
    const [chefData, setChefData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chefData')
            .then(res => res.json())
            .then(data => {
                setChefData(data.chefs);
                // console.log(data.chefs); // Logs the fetched data to the console
            })
            .catch(error => console.log(error))
    }, [])


    return (
        <div>
            <div>
                {chefData.map(chefInfo => (
                    <p key={chefInfo.id}>
                        <div>
                            <Row xs={1} md={3} className="g-4">

                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={chefInfo.chef_url} />
                                        <Card.Body>
                                            <Card.Title>{chefInfo.name}</Card.Title>
                                            <Card.Text>
                                                <p>Experience:  {chefInfo.years_of_experience} Years</p>
                                                <p>Number of Recipe: {chefInfo.num_recipes}</p>
                                                <div>
                                                <p><AiFillLike style={{ fontSize: '2rem', color: 'blue' }} />{chefInfo.likes}</p>
                                                <Button className="fw-bold" variant="success" size="lg">
                                                View Recipes Button
                                                </Button>
                                                </div>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>


                    </p>
                ))}
            </div>



        </div>
    );
};

export default Cards;