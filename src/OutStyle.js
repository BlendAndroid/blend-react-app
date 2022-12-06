import outstyle1 from './OutStyle.module.css'

function OutStyle() {
    return (
        <div>
            <div className='box'>OutStyle中的div</div>
            <p className={outstyle1.item}>Test中的P,使用自己的样式</p>
        </div>
    )
}

export default OutStyle