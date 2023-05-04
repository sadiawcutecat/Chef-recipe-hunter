// import React from 'react';
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { AiFillLike } from "react-icons/ai";
import {
    Link,
    useParams,

} from "react-router-dom";


const Recipe = () => {
    const [chefData, setChefData] = useState(null);
    const { id } = useParams();



    useEffect(() => {
        fetch('http://localhost:5000/chefData')
            .then(res => res.json())
            .then(data => {
                setChefData(data.chefs);
            })
            .catch(error => console.log(error))
    }, []);

    if (!chefData) return <p>Loading data...</p>;

    const chef = chefData?.filter(d => d.id.toString() === id);
    console.log(chef);
    if (!chef) return <p>Data not found for ID {id}</p>;

    return (
        <div>
            <img src={chef[0].chef_url} alt="" />
            <h1>{chef[0].name}</h1>
            {chef[0].recipes.map(item => (


                <div key={item.id}>
                    <Row md={2} className="g-4">

                        <Col>
                            <Card>
                          
                                <Card.Body>
                                  
                                    <Card.Text>
                                        <p>Recipe name:{item.name}</p>
                                        <h5>Ingredients:</h5>
                                        <p><ul>{item.ingredients}</ul></p>
                                        <h5>Recipe Method:</h5>
                                        <p>{item.method}</p>
                                        <Link> <Button className="fw-bold" variant="success" >
                                            Favorite
                                        </Button></Link>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </div>
            ))}
            <div >
                <div className="d-flex">
                    <h5>Experience: {chef[0].years_of_experience} Years</h5>
                    <h5>Number of Recipe: {chef[0].num_recipes}</h5>

                </div>
            </div>
            <p><AiFillLike style={{ fontSize: '2rem', color: 'blue' }} />{chef[0].likes}</p>


        </div>
    );
};

export default Recipe;