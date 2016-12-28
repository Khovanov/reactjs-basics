class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalLikes: props.totalLikes }
    this.handleClick = bind(this.handleClick, this)
  }

  handleClick(e) {
    this.setState({ totalLikes: this.state.totalLikes + 1 })
  }
  render() {
    return(
      DOM.button(
       { onClick: this.handleClick },
       `Like ${this.state.totalLikes}`
      )     
    )
  }
}

Like.defaultProps = {
  totalLikes: 0
}

Like.propTypes = {
  totalLikes: PropTypes.number
}
