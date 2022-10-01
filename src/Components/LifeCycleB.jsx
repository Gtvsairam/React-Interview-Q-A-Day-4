import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Sairam'
        }
        console.log("LifeCycleB Constructor");
    }
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleB getDerivedStateFromProps ");
        return null
    }
    componentDidMount(){
        console.log("LifeCycleB ComponentDidMount");
    }
    shouldComponentUpdate(){
        console.log("LifeCycleB shouldComponentUpdate");
        return true
    }
    getSnapshotBeforeUpdate(prevprops, prevstate){
        console.log("LifeCycleB getSnapshotBeforeUpdate");
        return null
    }
    componentDidUpdate(){
        console.log("LifeCycleB componentDidUpdate");
    }
    
  render() {
    console.log("LifeCycleB render ");
    return (
      <div>LifeCycleB
      
      </div>
      
    )
  }
}

export default LifeCycleB