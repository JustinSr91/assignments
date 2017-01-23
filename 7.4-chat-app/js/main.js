import React from 'react'
import { ajax } from 'jquery'

export default React.createClass({

  componentDidMount (){
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/justinstrayhorn-chat",
      datatype: "json",
      success: this.onInitialAjaxLoaded,
      error: this.onAjaxLoadFail
    })
  },
  getInitialState (){
    return {
      users: "",
      messages: "",
      ajaxData: []
    }
  },
  onInitialAjaxLoaded (response){
    var reversedAjaxArray = response.reverse()
    this.setState({
      ajaxData: reversedAjaxArray
    })
  },
  onPostAjaxLoaded (response){
    this.setState({
      ajaxData: this.state.ajaxData.concat(response)
    })
  },
  onAjaxLoadFail (response){
    // need to enter failure message
  },
  onUserChange (e){
    this.setState({users:e.target.value})
  },
  onMessageChange (e){
    this.setState({messages:e.target.value})
  },
  // This stores data
  onSubmitMessage (e){
    // Prevent page from refreshing
    e.preventDefault()
    var currentUser = this.state.users;
    var currentMessage = this.state.messages;
    var userDisplay = currentUser + ": ";

    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/justinstrayhorn-chat",
      datatype: "json",
      type: "POST",
      data: {
        currentUser: userDisplay,
        currentMessage: currentMessage
      },
      success: this.onPostAjaxLoaded,
      error: this.onAjaxLoadFail
    })
  },
  // clears chat history from window
  onMessagesClear(e) {
    e.preventDefault()
    this.setState({ajaxData:[]})
  },

  render (){
    return (
      <section>
        <h1> Chat Window </h1>
        <div>
          {
            this.state.ajaxData.map((currentPost, i)=>{
              return <p key={i}> <span>{currentPost.currentUser}</span> <span>{currentPost.currentMessage}</span></p>
            })
          }
        </div>
        <form>
          <input type="text" placeholder="User Name" onChange={this.onUserChange}/>
          <input type="text" placeholder="Type Your Message" onChange={this.onMessageChange}/>
          <input type="submit" onClick={this.onSubmitMessage}/>
          <input type="button" value="clear" onClick={this.onMessagesClear}/>
        </form>
      </section>
    )
  }

})
