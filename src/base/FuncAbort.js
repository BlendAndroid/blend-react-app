import PropTypes from 'prop-types'
// 在函数组件中定义一个props来传递
function FuncAbort(props) {
    return (
        <div>
            <p>函数组件中的内容</p>
            <p>{props.a}</p>
            <p>{props.b}</p>
            {props.children}
        </div>
    )
}

// function FuncAbort({ name, age }) {
//     return (
//         <div>
//             <p>函数组件中的内容</p>
//             <p>{name}</p>
//             <p>{age}</p>
//         </div>
//     )
// }

FuncAbort.defaultProps = {
    name: 'funcDefault',
    age: -1
}

FuncAbort.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default FuncAbort