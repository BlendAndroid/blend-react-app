import { Component } from "react";

/**
 * 其实就是一种双向绑定关系
 * 受控表单：表单元素的值全部由 react 来进行管理， 此时表单元素中的值都放在 state 中， 所以表单元素里的值也需要从 state 当中进行获取 
 * 非受控表单：不受 react 管理，表单元素的数据由 DOM 元素本身进行管理， 表单元素的值也是存放在 DOM 元素里，获取的时候需要操作 DOM 元素
 */
class FormApp extends Component {

    state = {
        test: '受控表单',
        age: 100,
        subject: 'java'
    }

    handler = (ev) => {
        const prop = ev.target.name
        this.setState({
            [prop]: ev.target.value
        })
    }

    hobbies = [
        {
            id: 1,
            title: 'vue',
            isChecked: true
        },
        {
            id: 2,
            title: 'React',
            isChecked: false
        },
        {
            id: 3,
            title: 'Angular',
            isChecked: false
        },
    ]

    checkHandler(index, ev) {
        console.log(index)
        this.hobbies[index].isChecked = ev.target.checked
    }

    checkBoxSubmit = (ev) => {
        //取消默认行为
        ev.preventDefault()
        let ret = this.hobbies.filter(hobby => hobby.isChecked)
            .map(hobby => hobby.id)

        //与state状态进行管理，拿到所有的数据
        ret = {
            ...this.state, ret
        }

        console.log( ret)

    }

    render() {
        return (
            <div>
                <h3>受控表单</h3>
                <div>
                    <input name="test" value={this.state.test} onChange={this.handler.bind(this)}></input>
                    <input name="age" value={this.state.age} onChange={this.handler.bind(this)} ></input>
                    <input type="text" defaultValue={this.state.test} />
                    <input type="text" value={this.state.test} readOnly />
                </div>

                <div>
                    <select name="subject" value={this.state.subject} onChange={this.handler.bind(this)}>
                        <option value="大前端">大前端</option>
                        <option value="java">java</option>
                        <option value="python">python</option>
                    </select>
                    <button onClick={() => { console.log(this.state) }}>点击获取状态值</button>
                </div>

                <div>
                    <form onSubmit={(ev) => { this.checkBoxSubmit(ev) }}>
                        {
                            this.hobbies.map((hobby, index) => {
                                return (
                                    <label key={hobby.id}>
                                        <input type="checkbox" defaultChecked={hobby.isChecked} onChange={this.checkHandler.bind(this, index)} />{hobby.title}
                                    </label>
                                )
                            })
                        }
                        <button onClick={() => { console.log(111) }}>点击获取数据</button>
                        <input type="submit"></input>
                    </form>
                </div>
            </div>
        )
    }

}

export default FormApp