var React = require('react');
var mui = require('material-ui');
var AppBar = mui.AppBar;
var Colors = mui.Styles.Colors;
var ProjectGrid = require('./projectGrid.jsx');
var DetailCard = require('./detailCard.jsx');
var ThemeManager = new mui.Styles.ThemeManager();
var FontIcon = mui.FontIcon;
var IconButton = mui.IconButton;

var palette = {
  primary1Color: Colors.deepOrange900,
  primary2Color: Colors.deepOrange700,
  primary3Color: Colors.deepOrange100,
  accent1Color: Colors.brown200,
  accent2Color: Colors.brown400,
  accent3Color: Colors.brown100,
  textColor: Colors.darkBlack,
  canvasColor: Colors.white,
  borderColor: Colors.darkBlack,
};

var Main = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object

  },


  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getInitialState: function() {
    return {
      projects: [],
      selectedProject: {links:[]}
    }
  },

  componentWillMount() {
    ThemeManager.setPalette(palette)
    ThemeManager.setComponentThemes({
      appBar: {
        textColor: Colors.grey100,
        color: Colors.grey900,
      }
    });
  },

  componentDidMount: function() {
    $.get('/projects/')
    .done(function(data){
      console.log(data);
      if(this.isMounted()){
        this.setState({
          projects: data.projects,
          selectedProject: data.projects[0]
        });
      }
    }.bind(this))
    .error(function (data, status){
      console.log(status);
      console.log(data);
    })
  },

  onCardClick: function (project) {
    this.setState({
      selectedProject: project
    });
  },

  onForwardClick: function (){
    console.log("Going Forwards");
    window.location.href = '/resume.pdf';
  },

  onBackwardClick: function (){
    console.log("Going Backwards");
    window.location.href = '/';
  },

  render: function() {
    console.log("Main Rendering, state:", this.state)
    appBarStyle = {
      margin: '0',
      fontFamily: 'Playfair Display, serif',
    }
    return (
      <div className="wrap flex-container">
        <AppBar
          title="Austin Greene"
          style={appBarStyle}
          iconElementLeft={<IconButton tooltip="Home" tooltipPosition="bottom-right" onClick={this.onBackwardClick}><FontIcon className="typcn typcn-home"/></IconButton>}
          iconElementRight={<IconButton tooltip="Resume" tooltipPosition="bottom-left" onClick={this.onForwardClick}><FontIcon className="typcn typcn-document-text"/></IconButton>}
          onLeftIconButtonTouchTap={this.onBackwardClick}
          onRightIconButtonTouchTap={this.onForwardClick}
        />
        <div className="main flex-container">
          <DetailCard
            project={this.state.selectedProject}
          />
          <ProjectGrid
            projects={this.state.projects}
            selectedProject={this.state.selectedProject}
            onCardClick={this.onCardClick}
          />
        </div>
      </div>
    );
  }
});

function run() {
    React.render(<Main />, document.body);

}

if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', run);
} else {
    window.attachEvent('onload', run);
}
