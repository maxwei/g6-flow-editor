// import editorStyle from '../util/defaultStyle'
// import { getShapeName } from '../util/clazz'

export default function (G6) {
    G6.registerBehavior('dragAddNode', {
        getDefaultCfg() {
            return {
            }
        },
        getEvents() {
            return {
                'canvas:mousemove': 'onMouseMove',
                'canvas:mouseup': 'onMouseUp',
                'canvas:mouseleave': 'onMouseLeave',
            }
        },
        // eslint-disable-next-line no-unused-vars
        onMouseMove(e) {
            // console.log('onMouseMove我在移动中')
            // console.log(e)
            // if (this.graph.get('addNodeDragging')) {
            //     let delegateShape = this.graph.get('addDelegateShape')
            //     const addModel = this.graph.get('addModel')
            //     const width = parseInt(addModel.size.split('*')[0])
            //     const height = parseInt(addModel.size.split('*')[1])
            //     const point = this.graph.getPointByClient(e.x, e.y)
            //     const { x } = point
            //     const { y } = point
            //     if (!delegateShape) {
            //         const parent = this.graph.get('group')
            //         delegateShape = parent.addShape('rect', {
            //             attrs: {
            //                 width,
            //                 height,
            //                 x: x - width / 2,
            //                 y: y - height / 2,
            //                 ...editorStyle.nodeDelegationStyle,
            //             }
            //         })
            //         delegateShape.set('capture', false)
            //         this.graph.set('addDelegateShape', delegateShape)
            //     }
            //     delegateShape.attr({ x: x - width / 2, y: y - height / 2 })
            //     this.graph.paint()
            //     this.graph.emit('afternodedrag', delegateShape)
            // }
        },
        onMouseUp(e) {
            console.log('behavior>>我释放了鼠标')
            console.log(e)
            console.log(this.graph)
            const timestamp = new Date().getTime()
            const randomNum = Math.floor((Math.random() * 1000) + 1).toString()// 产生1~1000之间的随机尾数
            const id = `${timestamp}${randomNum}`// 节点id
            this.graph.addItem('node',{
                id:id,
                type:'circle',
                label:'边测试',
                x:e.x,
                y:e.y,
            })
            // if (this.graph.get('addNodeDragging')){
            //     console.log('behavior>>我释放了鼠标')
            //     console.log(e)
            //     const p = this.graph.getPointByClient(e.clientX, e.clientY)
            //     const { x, y } = p
            //     const timestamp = new Date().getTime()
            //     const addModel = this.graph.get('addModel')
            //     console.log(this.graph)
            //     const model = {
            //         id: timestamp,
            //         x,
            //         y,
            //         ...addModel
            //     }
            //     console.log('----')
            //     console.log(model)
            //     this.graph.addItem('node', model)
            // }

            // if (this.graph.get('addNodeDragging')) {
            //     const p = this.graph.getPointByClient(e.clientX, e.clientY)
            //     const subProcessNode = this.graph.find('node', node => {
            //         if (node.get('model')) {
            //             const { clazz } = node.get('model')
            //             if (clazz === 'subProcess') {
            //                 const bbox = node.getBBox()
            //                 return p.x > bbox.minX && bbox.maxX > p.x
            //     && p.y > bbox.minY && bbox.maxY > p.y
            //             }
            //         } else {
            //             return false
            //         }
            //     })
            //     if (subProcessNode) {
            //         if (p.x > 0 && p.y > 0) {
            //             this._addNodeBySubProcess(p, subProcessNode)
            //         }
            //     } else if (p.x > 0 && p.y > 0) {
            //         this._addNode(p)
            //     }
            // }
        },
        // _addNodeBySubProcess(p, node) {
        //     if (this.graph.get('addNodeDragging')) {
        //         const addModel = this.graph.get('addModel')
        //         const { clazz = 'userTask' } = addModel
        //         addModel.shape = getShapeName(clazz)
        //         addModel.size = addModel.size.split('*')
        //         const timestamp = new Date().getTime()
        //         const id = clazz + timestamp
        //         const bbox = node.getBBox()
        //         const x = p.x - bbox.x - bbox.width / 2
        //         const y = p.y - bbox.y - bbox.height / 2 
        //         const nodeCfg = {
        //             ...addModel,
        //             x,
        //             y,
        //             id
        //         }
        //         const group = node.getContainer()
        //         const resultModel = group.addNodeModel(node, nodeCfg)
        //         if (this.graph.executeCommand) {
        //             this.graph.executeCommand('update', {
        //                 itemId: node.get('id'),
        //                 updateModel: resultModel,
        //             })
        //         } else {
        //             this.graph.updateItem(node, resultModel)
        //         }
        //     }
        // },
        // eslint-disable-next-line no-unused-vars
        onMouseLeave(e) {
            // console.log('onMouseLeave我移除了')
            // console.log(e)
            // if (this.graph.get('addNodeDragging')) {
            //     this._clearDelegate()
            // }
        },
        // _clearDelegate() {
        //     const delegateShape = this.graph.get('addDelegateShape')
        //     if (delegateShape) {
        //         delegateShape.remove()
        //         this.graph.set('addDelegateShape', null)
        //         this.graph.paint()
        //     }
        //     this.graph.emit('afternodedragend')
        // },
        // _addNode(p) {
        //     if (this.graph.get('addNodeDragging')) {
        //         const addModel = this.graph.get('addModel')
        //         const { clazz = 'userTask' } = addModel
        //         addModel.type = getShapeName(clazz)
        //         const timestamp = new Date().getTime()
        //         const id = clazz + timestamp
        //         const { x } = p
        //         const { y } = p
        //         if (this.graph.executeCommand) {
        //             this.graph.executeCommand('add', {
        //                 type: 'node',
        //                 addModel: {
        //                     ...addModel,
        //                     x,
        //                     y,
        //                     id,
        //                 },
        //             })
        //         } else {
        //             this.graph.add('node', {
        //                 ...addModel,
        //                 x,
        //                 y,
        //                 id,
        //             })
        //         }
        //         this._clearDelegate()
        //     }
        // }
    })
}
