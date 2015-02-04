var React = require("react");
var Reflux = require("reflux");

var store = Reflux.createStore({
  data: {message: 0},
  init() {
    setInterval(()=>{
      this.data.message++;
      this.trigger(this.data);
    }, 1000)
  },
  getInitialState() {
    return {
      message: "Hello from the state"
    }
  }
})
var App = React.createClass({
  mixins: [Reflux.connect(store)],

  render() {
    return <h1>{this.state.message}</h1>;
  }
});

React.render(<App/>, document.getElementById('example'));