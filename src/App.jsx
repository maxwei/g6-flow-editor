import React,{ Component }  from 'react';
import G6 from '@antv/g6';
import PropTypes from 'prop-types'
import LeftPanel from '../src/component/leftPanel'
import resigterBehavior from './registerBehavior'
import AddItemPanel from './plugins/addItemPanel'
import './App.scss';

resigterBehavior(G6)

const demoData = {
  // 点集
  nodes: [
    {
      id: 'node1', // String，该节点存在则必须，节点的唯一标识
      x: 100, // Number，可选，节点位置的 x 值
      y: 200, // Number，可选，节点位置的 y 值
    },
    {
      id: 'node2', // String，该节点存在则必须，节点的唯一标识
      x: 300, // Number，可选，节点位置的 x 值
      y: 200, // Number，可选，节点位置的 y 值
    },
  ],
  // 边集
  edges: [
    {
      source: 'node1', // String，必须，起始点 id
      target: 'node2', // String，必须，目标点 id
    },
  ],
};
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.G6EditorRef = React.createRef()
        this.LeftPanelRef = React.createRef()
    }
    componentDidMount() {
      const addItemPanel = new AddItemPanel({container:this.LeftPanelRef.current});

      const canvasWidth = this.G6EditorRef.current.clientWidth || 800
      const canvasHeight = window.innerHeight - 100
      this.graph = new G6.Graph({
        plugins: [addItemPanel],
          container: this.G6EditorRef.current,
          width: canvasWidth ,
          height: canvasHeight,
          modes: {
            default: ['drag-canvas', 'drag-node','zoom-canvas','dragAddNode'],
            view: [],
            edit: ['dragAddNode'],
        },
      })
      this.graph.data(demoData)
      this.graph.render()
      // this.graph.on('canvas:mouseup', evt => {
      //   console.log('-------weilong--------')
      //   console.log(evt)
      // })
  }
    render() {
        return (
          <div className="app">
            <div ref={this.LeftPanelRef}>
              <LeftPanel/>
            </div>
            
             <section style={{border:'1px solid red', background: '#f8f9fb' }} ref={this.G6EditorRef} />
          </div>  
        )
    }
}

App.propTypes = {
}

export default App
