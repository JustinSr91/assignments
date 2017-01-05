// [] Determine initial state and set (placeholder)
// [] render HTML elements
    // [] bring over title h1 element
    // [] bring over form element


import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      textAreaValue: "type the gift to buy here"
    }

  },
  render() {
    return (
      <main className="main" ref="mainElement">
        <h1 className="main__h1" ref="Title">GIFTS TO BUY</h1>
        <form className="item__form" ref="textForm"></form>
          <input className="item__textArea" ref="giftTextArea"/>
          <input className="addButton" ref="giftAddButton"/>
      </main>
    )
  }
})
