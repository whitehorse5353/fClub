/**
 * This is just an example file created at Wed Jan 27 2016 19:04:56 GMT+0530 (India Standard Time).
 *
 */

var React = require("react");
var carouselAction = require("../actions/carousel.Action");
var carouselStore = require("../stores/carousel.Stores");
var carouselStyle = require("../../styles/carousel.scss");

var Carousel = React.createClass({
  getInitialState : function(){
    return {
      width : 0,
      activeIndex : 0,
      priorIndex : 0,
      sequence : 1
    }
  },
  getDefaultProps : function(){
    return{
      items : ['https://www.wagonhq.com/images/posts/react.png','https://www.wagonhq.com/images/posts/react.png','https://www.wagonhq.com/images/posts/react.png','https://www.wagonhq.com/images/posts/react.png','https://www.wagonhq.com/images/posts/react.png'],
      autoPlay : true,
      autoPlayInterval : 1000,
      infiniteScroll : true,
      showArrows : false
    }
  },
  propTypes : {
    items : React.PropTypes.array,
    autoPlay : React.PropTypes.bool,
    autoPlayInterval: React.PropTypes.number,
    infiniteScroll:React.PropTypes.bool,
    showArrows:React.PropTypes.bool
  },
  _slideNext : function(){
    var numSlides = this.props.items.length;
    this.setState({
      activeIndex: (this.state.activeIndex + 1) % numSlides
    });
    if (this.props.autoPlay) {
      console.log("Next clicked")
      clearInterval(this._infiniteScroll);
    }
  },
  _slidePrev : function(){
    var numSlides = this.props.items.length;
    this.setState({
      activeIndex: (this.state.activeIndex + numSlides - 1) % numSlides
  });
    if (this.props.autoPlay) {
      console.log("Prev clicked")
      clearInterval(this._infiniteScroll);
    }
  },
  createSlides : function(items, i){
    return(
      <div key={i} className="item">
        <img src={items}/>
      </div>
    );
  },
  _dotsClick: function(i){
    if(i !== this.state.activeIndex){
      this.setState({
        activeIndex : i
      });
    }
    if (this.props.autoPlay) {
      console.log("dots clicked")
      clearInterval(this._infiniteScroll);
    }

  },
  createDots : function(items, i){
    var controlClasses =["indicator-item"];
    if(i === this.state.activeIndex){
      controlClasses.push(" active");
    }
    return(
      <li key={i} className={controlClasses.join(' ')} onClick={this._dotsClick.bind(this,i)}></li>
    );
  },
  componentDidMount :function(){
    this.setState({
      width : this.refs.carouselComponent.offsetWidth
    });

    if(this.props.autoPlay){
      this._autoScroll();
    }
  },
  _autoScroll : function(){
    this._infiniteScroll = setInterval(function(){
      var activeIndex = this.state.activeIndex,
        length = this.props.items.length;

      this.setState({
        activeIndex : (activeIndex + 1) % length
      });
      if (!this.props.infiniteScroll && activeIndex + 1 === length - 1) {
        console.log("last")
        clearInterval(this._infiniteScroll);
      }

    }.bind(this),this.props.autoPlayInterval)

  },
  _renderPreviousBtn : function(){
    var prevBtn = undefined;
    if(this.props.showArrows){
      if(this.props.autoPlay || this.props.infiniteScroll || this.state.activeIndex !== 0){
        prevBtn  = (
          <a className="prev" onClick={this._slidePrev}><i className="material-icons small dp48">play_circle_outline</i></a>
        )
      }
    }
    return prevBtn;
  },
  _renderNextBtn : function(){
    var nextBtn = undefined,
      length = this.props.items.length;
    if(this.props.showArrows){
      if(this.props.autoPlay || this.props.infiniteScroll || this.state.activeIndex !== length - 1){
        nextBtn  = (
          <a className="next" onClick={this._slideNext}><i className="material-icons small dp48">play_circle_outline</i></a>
        )
      }
    }
    return nextBtn;
  },
  render: function(){
    var children = this.props.items,
        width = this.state.width,
        trackWidth = width * children.length,
        trackPosition = -(width * this.state.activeIndex);


    return <div>
    <div ref="carouselComponent" className="carousel-component">

        <div className="carousel-wrapper">
          <div className="carousel-item-container" style={{ width: trackWidth, marginLeft: trackPosition }}>
            {this.props.items.map(this.createSlides)}
          </div>
        </div>
      {this._renderPreviousBtn()}
      {this._renderNextBtn()}
      </div>
      <ul className="indicators">
        {this.props.items.map(this.createDots)}
      </ul>
      </div>
  }
});

React.render(<Carousel />, document.getElementById('carousel'));
