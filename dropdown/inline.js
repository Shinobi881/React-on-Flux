var Badge = React.createClass({
  render: function() {
    return <button>
      {this.props.title} - {this.props.number}
    </button>
  }
});

var Form = React.createClass({
  render: function() {
    return <div>
      <Badge title="Inbox" number=5 />
    </div>
  };
});

var options = {
  title: 'Inbox',
  number: 5
};

var React.createElement(Form, options);