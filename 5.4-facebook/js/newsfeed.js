// [x] Link HTML
// [x] Create all HTML elements
  // [x] <section> post container
  // [x] <img> profile image
  // [] wrap <div> around h2 and h3 elements
  // [x] <h2> post title
  // [x] <h3> date of post
  // [x] <p> text content
  // [x] <article> comment section
    // [x] <img> profile img
    // [] <p> text content
// [x] Give elements classNames
      // body (body)
      // section element (post__container)
      // img element (profile__img)
      // h2 element (post__title)
      // h3 element (post__date)
      // p element (post__textContent)
// [x] Style HTML elements
  // [x] style section element (post__container)
  // [x] style img element (profile__img)
  // [x] style h2 element (post__title)
  // [x] style h3 element (post__date)
  // [x] style p element (post__textContent)


import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      comments: [
        {
          author: ""
        }
      ]
    }
  },

    render() {
      return (

      // <body className="body">
        <main className="main">
          <section className="post__container">
            <img className="author__img"
                 src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p200x200/12994577_1037121899695559_8791262156209967742_n.jpg?oh=555403f748c52a73e179697e4a8541ba&oe=5921E08F"></img>
            <div className="postTitleDate__div">
              <a href="#">
              <h2 className="author__name"> Instant Articles </h2>
              </a>
              <h3 className="post__date"> May 13, 2015 </h3>
            </div>
            <p className="author__textContent1"> Welcome! To see these stories in the Instant Articles format, you must be on the latest version of the Facebook app for iPhone or Android. </p>
            <p className="author__textContent2"> Learn more about this new tool for publishers at <a href="#" className="text__link"> instantarticles.fb.com. </a> </p>
          </section>
          <article className="comments__article">
            <img className="commentor__img"
                 src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/p200x200/12994577_1037121899695559_8791262156209967742_n.jpg?oh=555403f748c52a73e179697e4a8541ba&oe=5921E08F"></img>
          </article>
        </main>
      // </body>
      )
    }
})
