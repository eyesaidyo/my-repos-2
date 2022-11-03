import { Component } from "react";

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
          
          <h2 style={{'margin-top':'60px','color':'white','text-align':'center'}}>Sorry, there was an error loading this component</h2>
          <p style={{'text-align':'center'}} ><span>
          <a style={{'color':'white','text-align':'center'}} href='https://mygithub.rajonirem.repl.co/'>return home
          </a>
          </span></p>
        </div>
      );

    return this.props.children;
  }
}
export default ErrorBoundary;