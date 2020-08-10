
import React,{ Component } from 'react'
import './scss/index.scss'

class LeftPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {

        return (
            <div className="left-panel">
                <div className="drag-item item-start" data-item={'{ label: \'开始\',type:\'start-node\'}'} draggable="true"
                 >
                    开始
                </div>
                <div className="drag-item item-check" data-item={'{label: \'审批\',type:\'check-node\'}'} draggable="true">
                    审批
                </div>
                <div className="drag-item item-end" data-item={'{ label: \'结束\',type:\'end-node\'}'} draggable="true">
                    结束
                </div>
            </div>
        )
    }
}

LeftPanel.propTypes = {
}

export default LeftPanel
