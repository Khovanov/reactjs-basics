//Создать контейнерный компонент BlogPage, 
//который будет передавать массив записей компоненту BlogList.

// http://jsbin.com/pebaku/edit?html,js,output

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