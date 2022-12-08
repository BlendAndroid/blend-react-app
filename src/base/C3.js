
function C3(props) {
    return (
        <div>
            C3组件
            <div>{props.name}</div>
            <div>{props.age}</div>
            <button onClick={() => props.change({ name: '单向流动', age: 100 })}>单向数据流动改变</button>
        </div>
    )
}

export default C3