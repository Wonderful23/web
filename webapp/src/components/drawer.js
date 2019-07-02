import { Table, Button,Layout, Menu, Icon,Carousel, Drawer,  Radio } from 'antd';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from'./Counter'
import {Link,HashRouter} from'react-router-dom'
import Item from 'antd/lib/list/Item';
import {Router,Route} from'react-router';

const RadioGroup = Radio.Group;

export default class DrawerDetail extends Component {
  state = { visible: false, placement: 'bottom' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: "bottom",
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          了解详情
        </Button>
        <Drawer
          title="The Details of book"
          style={{marginTop:"5%",marginLeft:"15%",marginBottom:'10%'}}
          placement={this.state.placement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p className="context-detail">The Description:<br/>The Little Prince is a famous short story about children literature written by the French writer Antoine de Saint Exupery in 1942. The protagonist of  book is a little prince from an alien planethe book uses a pilot as a story narrator to describe the various adventures that the little prince experienced during his journey from his own planet to Earth  With the child-like vision of the little prince, the author reveals the emptiness, blindness, ignorance and rigid dogma of adults, and writes the loneliness and loneliness of human beings in the language of innocence and innocence At the same time, it also expresses the author critique of the relationship between money and the eulogy of truth, goodness and beauty.</p>
        
        <p className="context-detail">The Author:<br/>Saint Exupery (1900-1944), French writer He is one of the first generation of pilots in France  In 1940, he was exiled to the United States, living in New York, and immersed in literary creation  In 1943, he participated in the Allied War in North Africa  In 1944 he disappeared While performing the eighth flight reconnaissance mission  His works mainly describe the life of the pilot  His masterpiece is the novel <b>Night Flight</b>, the collection of essays <b>The Land of Man</b>, <b>Air Force Pilot</b>, the fairy tale <b>Little Prince</b>, etc.</p>
        </Drawer>
        </div>
    );
  }
}