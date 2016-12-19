// Реализовать компонент Image для вывода картинки. 
// В качестве свойств передавать компоненту src (ссылка на картинку),
// width, height (высота и ширина) и 
// alt (альтернативный текст к картинке). 
// Вывести тестовый элемент компонента на html-странице

// http://jsbin.com/matadeq/1/edit?html,js,output

class Image extends React.Component {
  render() {
    const { src, width, height, alt } = this.props;
    return DOM.img(
      { 
        src: src, 
        width: width, 
        height: height, 
        alt: alt 
      }
    )
  }
}
