import C3 from './C3'

function C2(props) {
    return (
        <div>
            C2组件
            <C3 {...props}></C3>
        </div>
    )
}

export default C2