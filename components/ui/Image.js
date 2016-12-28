class Image extends React.Component {
  render() { return React.DOM.img(this.props) }
}

Image.defaultProps = {
  src: 'http://lorempixel.com/100/100/', 
  width: '100px', 
  height: '100px', 
  alt: 'Image' 
}