class BlogList extends React.Component {
  render() {
    const { list } = this.props;
    return (DOM.ul(
        {style: { listStyleType: 'none'} },
        _.map(
          list,
          (item, key) => (
            DOM.li(
              { key }, 
              React.createElement(BlogItem, item)
            )
          )
        )
      )
    )
  }
}

BlogList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};
