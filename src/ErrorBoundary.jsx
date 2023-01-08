import { Component } from "react";
import Nav from './Nav'
import {Link} from 'react-router-dom'
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error)
      return (
        <div className='app'>
          <Nav/>
          <h2 style={{'marginTop':'60px','color':'white','textAlign':'center'}}>Sorry, there was an error loading this component</h2>
          <p style={{'textAlign':'center'}} ><span>
          <a style={{'color':'red','textAlign':'center'}} href='/'><p>return home</p>
          </a>
          </span></p>
        </div>
      );

    return this.props.children;
  }
}
export default ErrorBoundary;