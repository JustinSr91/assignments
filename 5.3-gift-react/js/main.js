// [x] Determine initial state and set (placeholder)
// [x] render HTML elements
    // [x] bring over title h1 element
    // [x] bring over form element
// [] create and refine dropdown functionality


import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      textAreaValue: ''
    }

  },

  onItemAddButtonClick(e) {

    e.preventDefault();
    var currentTextAreaValue = this.state.textAreaValue;
    var listItemElement = currentTextAreaValue[0];
    this.refs.gift.prepend(listItemElement)
  },
  updateTextAreaValue: function(evt) {
    this.setState({
      textAreaValue: evt.target.value
    })
  },

  render() {
    return (
      <main className="main" ref="mainElement">
        <h1 className="main__h1" ref="Title">GIFTS TO BUY</h1>
        <form className="item__form" ref="textForm"></form>
          <input className="item__textArea" type="text" ref="itemTextArea" name="giftInput" placeholder="enter name of gift here..." value={ this.state.textAreaValue } onChange={ this.updateTextAreaValue }></input>
          <input className="addButton" type="submit" name="itemAddButton"ref="giftAddButton" value="ADD" onClick={ this. onItemAddButtonClick }></input>
        <section className="list__section" ref="giftListSection">
          <article>
            <button className="check__button" ref="checkButton"></button>
            <h2 className="h2__item" ref="gift"></h2>
          </article>
        </section>

      </main>
    )
  }
})
