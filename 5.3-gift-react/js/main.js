// [x] Determine initial state and set (placeholder)
// [x] render HTML elements
    // [x] bring over title h1 element
    // [x] bring over form element
// [] create and refine dropdown functionality

// importing React from node modules
import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      textAreaValue: ''
    }

  },
// represents click event for Add Button
  onItemAddButtonClick(e) {

    e.preventDefault();
    var currentTextAreaValue = this.state.textAreaValue;
    var listItemElement = currentTextAreaValue;
    this.refs.gift.prepend(listItemElement)
  },
  updateTextAreaValue: function(evt) {
    this.setState({
      textAreaValue: evt.target.value
    })
  },
// Pulling HTML elements into js file
  render() {
    return (
      <main className="main" ref="mainElement">
        <h1 className="main__h1" ref="Title">GIFTS TO BUY</h1>
        <form className="item__form" ref="textForm">
          <input className="item__textArea" type="text" ref="itemTextArea" name="giftInput" placeholder="enter name of gift here..." value={ this.state.textAreaValue } onChange={ this.updateTextAreaValue }></input>
          <input className="addButton" type="submit" name="itemAddButton"ref="giftAddButton" value="ADD" onClick={ this. onItemAddButtonClick }></input>
        </form>
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
