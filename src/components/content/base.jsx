import React, { Component } from 'react';

class Base extends Component {
    state = {  } 
    render() { 
        return (
        <div className="card" style={{ marginTop: "10px" }}>{/* , backgroundColor:"lightblue" */}
            <div className="card-body">
                {this.props.children}
            </div>
        </div>
        );
    }
}
 
export default Base;