import { Component } from "react";
import C1 from "./C1";

class Header extends Component {

    //在类组件当中，默认就存在一个state属性，它是一个对象，用于保存当前对象的数据
    //之后还可以通过setState来修改数据的值，修改之后的状态会自动展示在DOM上

    state = {
        name: "Jetpack学习",
        age: 12
    }

    handler = () => {
        this.setState({
            name: "Compose学习",
            age: ++this.state.age
        })
    }

    // 定义状态的更新方法, 当前外只负责定义，在想要修改数据的地方会进行调用
    dataFlow = ({ name, age }) => {
        this.setState({ name, age })
    }


    render() {
        return (
            <>
                {this.state.name}
                {this.state.age}
                <button onClick={this.handler}>改变属性</button>
                <h3>{this.props.children}</h3>
                <C1 {...this.state} change={this.dataFlow}></C1>
            </>
        )
    }
}

export default Header