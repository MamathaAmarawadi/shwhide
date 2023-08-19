// Write your code here
import './index.css'

import {Component} from 'react'

class ShowHide extends Component {
  state = {first: '', name1: '', last: '', name2: ''}

  onFirst = () => {
    this.setState(prevState => {
      console.log('first')
      console.log(`${prevState.name1}`)
      console.log(`${prevState.first}`)
      if (prevState.first === 'card1') {
        return {first: '', name1: ''}
      }
      return {first: 'card1', name1: 'Joe'}
    })
  }

  onLast = () => {
    this.setState(prevState => {
      console.log('last')
      console.log(`${prevState.name2}`)
      console.log(`${prevState.last}`)
      if (prevState.last === 'card2') {
        return {last: '', name2: ''}
      }
      return {last: 'card2', name2: 'Jonas'}
    })
  }

  render() {
    const {first, last, name1, name2} = this.state
    return (
      <div className="container">
        <div className="center">
          <h1 className="heading">Show/Hide</h1>
          <div className="btnFrame">
            <button className="btn1" onClick={this.onFirst}>
              Show/Hide Firstname
            </button>
            <button className="btn1" onClick={this.onLast}>
              Show/Hide Lastname
            </button>
          </div>
          <div className="btnFrame">
            <div>
              <div className={first}>
                <p>{name1}</p>
              </div>
            </div>
            <div className={last}>
              <p>{name2}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
