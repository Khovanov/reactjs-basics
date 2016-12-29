class MetaInfo extends React.Component {
  render() {
    const { author, updatedAt, createdAt, style } = this.props;
    return(
      React.DOM.div(
        {style: style}, 
        `Author: ${author}; 
         Updated at: ${displayDate(updatedAt)}; 
         Created at: ${displayDate(createdAt)}`
      )
    )
  }
}

MetaInfo.defaultProps = {
  style: { background: '#8f8' }
}

MetaInfo.propTypes = {
  style: PropTypes.object,
  author: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};