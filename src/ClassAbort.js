import { Component } from "react";

class ClassAbort extends Component {

    static defaultProps = {
        name: 'funcDefault',
        age: -1 
    }

    //在类组件中存在一个props属性，外部传来的数据都能显示
    render() {
        const { name, age } = this.props
        return (
            <div>
                <p>类组件中的内容</p>
                <p>{name}</p>
                <p>{age}</p>
                {this.props.children}
            </div>
        )
    }
}

export default ClassAbort