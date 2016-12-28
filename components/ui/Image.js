class Image extends React.Component {
  render() { return React.DOM.img(this.props) }
}

Image.defaultProps = {
  width: '100px', 
  height: '100px', 
  alt: 'Image' 
}

Image.propTypes = {
  src: PropTypes.string.isRequired, 
  width: PropTypes.string, 
  height: PropTypes.string, 
  alt: PropTypes.string 
};
