import React, {Component} from 'react';

class ErrorBoundary extends Component{

    state ={
        hasError: 'false',
        errMessage: ''
    }

    componentDidCatch = (err, msg) => {
        this.state({
            hasError: 'true',
            errMessage: err
        })
    }

    render() {

        if(this.state.hasError) {
            return <h1>{this.state.errMessage}</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;