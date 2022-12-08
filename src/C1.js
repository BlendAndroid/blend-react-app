import C2 from './C2'

function C1(props) {
    return (
        <div>
            C1组件
            <C2 {...props}></C2>
        </div>
    )
}

export default C1