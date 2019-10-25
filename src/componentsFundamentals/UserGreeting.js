import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }


  render() {

    // if (this.state.isLoggedIn){
    //   return (
    //     <div>
    //       <div>Welcome Hussy</div>
    //     </div>
    //   )
    // }else{
    //   return (
    //     <div>
    //       <div>Welcome Guest</div>
    //     </div>
    //   )
    // }




    //   let message
    //   if (this.state.isLoggedIn) {
    //     message = "WElcome huss"
    //   } else {
    //     message = "welcome guesty"
    //   }

    //   return <div>{message}</div>


    // return (
    //   this.state.isLoggedIn ? <div>Hello huss</div> : <div>Welcome guest</div>
    // )

    return this.state.isLoggedIn && <div>Welcome husse {/*otherwise nothing */}</div>

  }
}

export default UserGreeting
