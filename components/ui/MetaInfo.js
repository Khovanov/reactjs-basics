class MetaInfo extends React.Component {
  render() {
    const { author, updatedAt, createdAt, dateFormat } = this.props;
    return(
      React.DOM.div(
        {style: this.props.style}, 
        `Author: ${author}; 
         Updated at: ${moment(updatedAt).format(dateFormat)}; 
         Created at: ${moment(createdAt).format(dateFormat)}`
      )
    )
  }
}

MetaInfo.defaultProps = {
  style: { background: '#8f8' },
  dateFormat: "DD-MM-YYYY"
}