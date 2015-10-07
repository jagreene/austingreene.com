var React = require('react');
var mui = require('material-ui')
var Paper = mui.Paper;
var Card = mui.Card;
var CardHeader = mui.CardHeader;
var CardMedia = mui.CardMedia;
var CardTitle = mui.CardTitle;

ProjectCard = React.createClass({
  handleClick: function() {
    this.props.onCardClick(
      this.props.project
    )
  },

  render: function(){
    if (this.props.selected){
      var cardStyle = {
        backgroundColor: '#ccc'
      }
    } else {
      var cardStyle = {
        backgroundColor: '#FFF'
      }
    }

    var titleStyle = {
      fontFamily : 'Playfair Display, serif',
      fontWeight: 400,
    }

    return (
      <Card className='project-card' onClick={this.handleClick} style={cardStyle} className="project-card">
        <CardMedia>
          <img className="project-img" src={"images/preview/"+this.props.project.image}/>
        </CardMedia>
      </Card>
    );
  }
});

ProjectMatrix =  React.createClass({
  render: function() {
    var projectNodes = this.props.projects.map(function (project) {
      if (project == this.props.selectedProject) {
        return (<ProjectCard
          project={project}
          onCardClick={this.props.onCardClick}
          selected={true}
          key={project.title}
        />)
      } else {
        return(<ProjectCard
          project={project}
          onCardClick={this.props.onCardClick}
          selected={false}
          key={project.title}
        />)
      }
    }.bind(this));
    return (
      <div className="project-matrix">
        {projectNodes}
      </div>
    );
  }
});

module.exports = ProjectMatrix;
