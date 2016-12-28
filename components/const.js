const { DOM, PropTypes } = React;
const { assign, bind } = _;

const list = [
  {
    text: 'Lorem ipsum dolor sit amet',
    image: {
      src: 'http://lorempixel.com/100/100/sports'
    },
    metaInfo: {
      author: 'Greg',
      updatedAt: "2016-12-28",
      createdAt: "2016-12-20",
      totalLikes: 10        
    }    
  },
  {
    text: 'Consectetur adipisicing elit',
    image: {
      src: 'http://lorempixel.com/100/100/animals'
    },
    metaInfo: {
      author: 'Ann',
      updatedAt: "2016-12-18",
      createdAt: "2016-12-18",
      totalLikes: 20       
    }    
  },
  {
    text: 'Sed do eiusmod tempor incididunt',
    image: {
      src: 'http://lorempixel.com/100/100/people'
    },
    metaInfo: {
      author: 'Mike',
      updatedAt: "2016-12-05",
      createdAt: "2016-12-01",
      totalLikes: 30                   
    } 
  } 
]
