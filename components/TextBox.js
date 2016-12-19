//Реализовать компонент TextBox, 
//получающий в качестве дочернего элемента строку 
//с некоторым текстом и возвращающий её в блоке span. 
//Вывести тестовый элемент компонента на html-странице

// http://jsbin.com/matadeq/3/edit?html,js,output

class TextBox extends React.Component {
  render() { return (DOM.span(null, this.props.text)) }
}
