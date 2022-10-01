import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Sairam'
        }
        console.log("LifeCycleA Constructor");
    }
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleA getDerivedStateFromProps ");
        return null
    }
    componentDidMount(){
        console.log("LifeCycleA ComponentDidMount");
    }
    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate");
        return true
    }
    getSnapshotBeforeUpdate(prevprops, prevstate){
        console.log("LifeCycleA getSnapshotBeforeUpdate");
        return null
    }
    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate");
    }
    handleCgange=()=>{
        this.setState({
            content:"this is me"
        })
       
    }

  render() {
    console.log("LifeCycleA render ");
    return (
      <div>LifeCycleA
      <button onClick={this.handleCgange}>Submit</button>
      <LifeCycleB/>
      
      </div>
      
    )
  }
}

export default LifeCycleA