var React = require('react');

var mui = require('material-ui')
var Paper = mui.Paper;
var RaisedButton = mui.RaisedButton;
var FontIcon = mui.FontIcon;
var Card = mui.Card;
var CardTitle = mui.CardTitle;
var CardHeader = mui.CardHeader;
var CardText = mui.CardText;
var CardMedia = mui.CardMedia;
var CardActions = mui.CardActions;

DetailCard = React.createClass({
  render: function(){
    var titleStyle = {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 700,
    }

    var textStyle = {
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: 400,
    }

    var buttonNodes = this.props.project.links.map(function (button) {
      if (button.type === "github") {
        return (
          <RaisedButton className="detail-btn" linkButton={true} href={button.link} target="_blank" label={button.label} labelPosition={"after"} secondary={true} key={button.label}>
            <FontIcon className="typcn typcn-social-github"/>
          </RaisedButton>
        )
      } else {
        return (
          <RaisedButton className="detail-btn" linkButton={true} href={button.link} target="_blank" labelPosition={"after"} secondary={true} label={button.label} key={button.label}>
            <FontIcon className="typcn typcn-link"/>
          </RaisedButton>
        )
      }
    }.bind(this));

    return (
      <Card className='detail-card'>
        <CardMedia overlay={<CardTitle title={this.props.project.title} style={titleStyle}/>}>
          <img className='detail-img' src={"images/full/"+this.props.project.image}/>
        </CardMedia>
        <CardText className="detail-text" style={textStyle}>
          {this.props.project.text}
        </CardText>
        <CardActions className="detail-actions">
          {buttonNodes}
        </CardActions>
      </Card>
    )
  }
});

module.exports = DetailCard
