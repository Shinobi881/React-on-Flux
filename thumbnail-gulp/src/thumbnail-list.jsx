var ThumbnailList = React.createClass({
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbanailProps){
      return <Thumbnail {...thumbanailProps}/>
    });

    console.log('Inspecting the list:', list);
    return <div>
    {list}
    </div>

  }
});