//Создать компонент BlogList для вывода списка записей в блоге. 
//Передать ему с помощью свойств массив объектов c описанием записи в блоге 
//(ссылка на картинку и текст). 
//Компонент должен представить записи в виде списка из элементов BlogItem. 
//Вывести результат на html-странице

// http://jsbin.com/nameva/2/edit?html,js,output

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
              React.createElement(BlogItem, { src: item.src, text: item.text })
            )
          )
        )
      )
    )
  }
}
