class BlogPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { list }
  }  
  render() {
    const { list } = this.state
    return React.createElement(BlogList, { list })
  }   
}