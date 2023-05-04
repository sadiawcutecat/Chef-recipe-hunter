// import React from 'react';

// import { Button, Container } from "react-bootstrap";
// import { Form, Link } from "react-router-dom";
// import { useState } from 'react';
// import { getAuth  } from "firebase/auth";
// const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
// import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import app from '../../firebase/firebase.config';
import NavSection from '../Shared/NavSection';


const Login = () => {
    // const [guser, setUser] = useState(null);
    // console.log(guser);
    // const auth = getAuth(app);
    // const googleProvider = new GoogleAuthProvider();
    // const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    // console.log(user);
    // const githubProvider = new GithubAuthProvider();

    // const handleGoogleSignIn = () => {

    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             const loggedInUser = result.user;
    //             console.log(loggedInUser);
    //             setUser(loggedInUser);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }
    return (
        <div>
            <NavSection></NavSection>
            <h1>hello login page</h1>

            <form action="" className="w-75 mx-25">



                {/* <label  className="form-label">Password</label>
                <input type="password" id="inputPassword5" className="form-control" aria-labelledby="passwordHelpBlock"/>
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div> */}



                    {/* <button onClick={handleGoogleSignIn}>Google login</button> */}
                    {/* <button onClick={() => signInWithGoogle()}>Google login</button> */}

                    <button
                                onClick={() => signInWithGoogle()}
                                // className="btn btn-outline"
                            >SIGN IN WITH GOOGLE</button>


            </form>
        </div>

        //   <Container className='w-25 mx-auto'>
        //     <h3>Please Login</h3>
        //     <Form>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label>Email address</Form.Label>
        //             <Form.Control type="email" name='email' placeholder="Enter email" required />
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicPassword">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control type="password" name='password' placeholder="Password" required />
        //         </Form.Group>

        //         <Button variant="primary" type="submit">
        //            Google Login
        //         </Button>
        //         <br />
        //         <Form.Text className="text-secondary">
        //             Dont Have an Account? <Link to="/register">Register</Link>
        //         </Form.Text>
        //         <Form.Text className="text-success">

        //         </Form.Text>
        //         <Form.Text className="text-danger">

        //         </Form.Text>
        //     </Form>
        // </Container>

    );
};

export default Login;