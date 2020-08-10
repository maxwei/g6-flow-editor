import { deepMix, each } from '@antv/util';
import { createDom } from '@antv/dom-util';

class AddItemPanel {
  private readonly _cfgs: any;

  constructor(cfgs:any) {
    console.log('additemPanel---->cfgs');
    console.log(cfgs);
    this._cfgs = deepMix(this.getDefaultCfg(), cfgs);
    console.log(this._cfgs);
  }
  getDefaultCfg() {
    return { container: null };
  }

  get(key:any) {
    return this._cfgs[key];
  }
  set(key:any, val:any) {
    this._cfgs[key] = val;
  }

  initPlugin(graph:any) {
    console.log('additemPanel---->graph');
    console.log(graph);
    const parentNode = this.get('container');
    console.log(parentNode);

    
    const children = parentNode.querySelectorAll('.drag-item');
    console.log('children',children)

    each(children,(child,i)=>{
      // 将string转换为json对象，使用JSON.parse需严格遵守JSON规范，如属性都需用引号引起来，所以这里不用JSON.parse
      // eslint-disable-next-line no-new-func
      const addModel = (new Function("return " + child.getAttribute('data-item')))();

      child.addEventListener('dragstart', (e:any) => {
        // graph.set('addNodeDragging',true);
        graph.set('addModel',addModel);
      });

      child.addEventListener('dragend', (e:any) => {
        graph.emit('canvas:mouseup',e);        
        // graph.set('addNodeDragging',false);
        // graph.set('addModel',null);

      });
    })
  }

  destroy() {
    // this.get('canvas').destroy();
    // const container = this.get('container');
    // container.parentNode.removeChild(container);
  }
}

export default AddItemPanel;
