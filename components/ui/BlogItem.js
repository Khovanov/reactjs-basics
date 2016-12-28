class BlogItem extends React.Component {
  render() {
    const { text, metaInfo, image } = this.props;
    return (React.DOM.div(
        null,
        React.createElement(TextBox, { text: text }),
        React.createElement(Image, assign({}, image)),
        React.createElement(MetaInfo, metaInfo),
        React.createElement(Like, {totalLikes: metaInfo.totalLikes})        
      )
    )
  } 
}
