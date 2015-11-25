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
var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    );
  }
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbanailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbanailProps));
    });

    console.log('Inspecting the list:', list);
    return React.createElement("div", null, 
    list
    );

  }
});


var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function(){
    return  React.createElement("div", {className: "col-sm-3 col-md-4"}, 
              React.createElement("div", {className: "thumbnail"}, 
                React.createElement("img", {src: this.props.imageUrl}), 
                  React.createElement("div", {className: "caption"}, 
                    React.createElement("h3", null, this.props.header), 
                      React.createElement("p", null, this.props.description), 
                      React.createElement("p", null, 
                        React.createElement(Badge, {title: this.props.title, number: this.props.number})
                      )
                  )
              )
            );
  }
});