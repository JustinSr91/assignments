// [x] Link HTML
// [x] Create all HTML elements
  // [x] <section> post container
  // [x] <img> profile image
  // [x] <h2> post title
  // [x] <h3> date of post
  // [x] <p> text content
// [x] Give elements classNames
      // section element (post__container)
      // img element (profile__img)
      // h2 element (post__title)
      // h3 element (post__date)
      // p element (post__textContent)
// [] Style HTML elements
  // [] style section element (post__container)
  // [] style img element (profile__img)
  // [] style h2 element (post__title)
  // [] style h3 element (post__date)
  // [] style p element (post__textContent)



import React from 'react'

export default React.createClass({

    render() {
      return (

        <section className="post__container">
          <img className="profile__img"
               src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p200x200/12994577_1037121899695559_8791262156209967742_n.jpg?oh=555403f748c52a73e179697e4a8541ba&oe=5921E08F"></img>
          <h2 className="post__title"> Instant Articles </h2>
          <h3 className="post__date"> May 13, 2015 </h3>
          <p className="post__textContent"> Welcome! To see these stories in the Instant Articles format, you must be on the latest version of the Facebook app for iPhone or Android.
Learn more about this new tool for publishers at instantarticles.fb.com. </p>

        </section>
      )
    }
})
