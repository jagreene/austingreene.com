var React = require('react');

Declaration = React.createClass({
  getInitialState: function() {
    return {
      declaration: "By Typing a Lot"
    };
  },
  componentWillMount: function() {
    this.intervals = [];
  },

  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },

  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  },

  componentDidMount: function(){
    this.setInterval(this.getDeclaration, 3000);
  },

  getDeclaration: function(){
    $.get('/declaration')
    .done(function(data){
      if(this.isMounted()){
        this.setState({
          declaration: data,
        });
      }
    }.bind(this))
    .error(function (data, status){
      console.log(status);
      console.log(data);
    })
  },

  render: function(){
    console.log(this.state.declaration);
    return (
      <div className="declaration">
        <h1>
          I Make Things {this.state.declaration}
        </h1>
      </div>
    )
  }
});

module.exports = Declaration;
