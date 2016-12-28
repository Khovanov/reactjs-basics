class TextBox extends React.Component {
  render() { return (DOM.span(null, this.props.text)) }
}

TextBox.propTypes = {
  text: PropTypes.string.isRequired
};
