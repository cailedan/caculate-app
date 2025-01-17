import React, { Component } from 'react';
import NavBar from './navbar';
import Home from './content/home';
import Caculate from './content/caculate';
import Login from './content/login';
import Register from './content/register';
import NotFound from './content/notfound';
import { Route, Routes ,Navigate} from 'react-router-dom';


class App extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/home' element={<Home/>} />
                        <Route path='/caculator' element={<Caculate />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/404' element={<NotFound />} />
                        <Route path="*" element={ <Navigate replace to="/404" /> } />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}
 
export default App;