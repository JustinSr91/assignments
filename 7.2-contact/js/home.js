// [x] import components
// [x] create object data
// [] render data in page

import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps(){
    return {
      contacts: [
        {
          name: "First Last",
          phone: "208093843",
          email: "email@domain.com",
          location: "City, ST",
        },
        {
          name: "First Last",
          phone: "208093843",
          email: "email@domain.com",
          location: "City, ST",
        }
      ]
    }
  },

  render() {
    return (
      <section>
        <article>
          <h1> Contacts List </h1>
          {
            this.props.contacts.map(
              (contacts, i)=>{
                return (
                  <Link to={'${contacts.name}/${contacts.email}/${contacts.phone}/${contacts.location}'}key={i}
                        className="contactLink">{contacts.name}
                  </Link>
                )
              }
            )
          }
        </article>
      </section>
    )
  }
})
