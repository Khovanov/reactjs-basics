//Собрать из реализованных ранее компонентов TextBox и Image 
//компонент BlogItem для короткого представления записи в блоге; 
//Вывести три тестовых элемента записи в блоге на html-странице

// http://jsbin.com/gofewi/3/edit?html,js,output

class BlogItem extends React.Component {
  render() {
    const { src, text } = this.props;
    return (DOM.div(
        null,
        [
          React.createElement(Image, 
            { 
              src: src, 
              width: '100px', 
              height: '100px', 
              alt: 'Image' 
            } 
          ),
          React.createElement(TextBox, { text: text })
        ]
      )
    )
  } 
}

