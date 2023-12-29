import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {condition: true}

  subscribe = () => {
    this.setState({condition: false})
  }

  subscribed = () => {
    this.setState({condition: true})
  }

  render() {
    const {condition} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {condition && (
          <button type="button" className="btn" onClick={this.subscribe}>
            Subscribe
          </button>
        )}
        {!condition && (
          <button type="button" className="btn" onClick={this.subscribed}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
