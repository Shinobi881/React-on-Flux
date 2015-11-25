var options = {
      thumbnailData: [{
        title: "title of this badge",
        number: "10",
        header: "Learn React",
        description: "React is a fast new library for making fast dynamic web pages.",
        imageUrl: "https://facebook.github.io/react/img/logo_og.png"
      }, {
        title: "Show Courses",
        number: "25",
        header: "Learn Gulp",
        description: "React is a fast new library for making fast dynamic web pages. GUlp will speed up your development workflow.",
        imageUrl: "https://avatars0.githubusercontent.com/u/6200624?v=3&s=400"
      }]
    };
    
var element = React.createElement(ThumbnailList, options);


React.render(element, document.querySelector('.target'));