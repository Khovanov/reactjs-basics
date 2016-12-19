// ReactDOM.render(
//   React.createElement(Image, 
//       { 
//         src: 'http://lorempixel.com/100/100/', 
//         width: '100px', 
//         height: '100px', 
//         alt: 'Image' 
//       } 
//   ),
//   document.getElementById('image')
// )

// ReactDOM.render(
//   React.createElement(TextBox, { text: 'lorem ipsum' }),
//   document.getElementById('textbox')
// )

// ReactDOM.render(
//   React.createElement(BlogItem, { src: 'http://lorempixel.com/100/100/', text: 'lorem ipsum' }),
//   document.getElementById('blogitem')
// )

// ReactDOM.render(
//   React.createElement(BlogList, { list: list }),
//   document.getElementById('bloglist')
// )

ReactDOM.render(
  React.createElement(BlogPage),
  document.getElementById('blogpage')
)
