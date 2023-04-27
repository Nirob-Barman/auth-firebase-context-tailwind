import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = event => {

        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                // console.log(result);
                // console.log(result.user);
                const loggedUser = result.user;
                // console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            {/* <div className="hero-content flex-col lg:flex-row-reverse"> */}
            {/* <div className="hero-content flex-col md:flex-row-reverse"> */}
            <div className="hero-content flex-col">
                {/* <div className="text-center lg:text-left"> */}
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login !</h1>
                    {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            {/* <input type="text" placeholder="email" className="input input-bordered" /> */}
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            {/* <input type="text" placeholder="password" className="input input-bordered" /> */}
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div className='form-control'>
                            <button onClick={handleGoogleSignIn} className="btn btn-primary">Log in With Google</button>
                        </div>
                    </form>

                    <div className='text-center'>
                        {/* <Link to='/register'><button className="btn btn-link">New to Auth Master</button></Link> */}
                        <Link to='/register' className="label-text-alt link link-hover">New to Auth Master? Please Register</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;