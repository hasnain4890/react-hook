import React, { Component } from 'react'

class Refsdemo extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef()
       
    }
    componentDidMount(){
        //this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickhandler=()=>{
      alert(this.inputRef.current.value)  
    }
  render() {
    return (
      <div>
          <input type="text" ref={this.refinput}/>
          <button onClick={this.clickhandler}>Click</button>
      </div>
    )
  }
}

export default Refsdemo