import Radium from 'radium'
import ClassAbort from './ClassAbort';
import FuncAbort from './FuncAbort';
import OutStyle from './OutStyle'

/**
 * JSX语法
 * 1.JSX 可以看作是JS的扩展，既不是一个字符串，也不是一个HTML，本身就是一个表达式
 * 2.具备了JS的所有功能，同时还可以被转为HTML在界面上进行展示（react react-dom）
 * 
 * -动态显示数据  {}
 * -调用方法
 * -支持表达式，支持三元运算符
 * 
 * 
 * 可以添加属性,动态属性
 * 添加子元素
 * 
 * 
 * 绑定事件:驼峰命名直接添加={事件监听的名称}
 * 事件监听传参:
 * a. 利用箭头函数内部调用事件监听的时候传递实参
 * b. 利用 bind 方法返回一个新的函数在事件发生时调用，此时也可以传递参数
 * 
 * 获取事件对象:
 * a. 默认情况下不需要接收参数，且直接执行事件监听，此时它的第一个参数默认就是 ev 
 * b. 利用箭头函数执行事件监听的时候，需要通过箭头函数将 ev 对象传递给事件监听函数进行使用 
 * c. 利用bind 方法执行时，如果有传参那么最后一个参数默就接收到的就是 ev  
 * 
 * 数据循环：
 * jsx 当中可以直接将数组中的数据解构
 * 
 * 样式处理：
 * 内联样式：需要放置在{}中，相当于有两个{{}}，但内联样式默认无法支持伪类及媒询样式设置，需要导入Radium
 * 内联的对象单位也可以不写，但是需要驼峰命名
 * 外联样式:全局外联样式,所有组件当中都可以直接进行使用; 组件级别的外联样式, 只有某一个组件可以进行使用 
 * 
 * 创建组件:
 * a. 创建函数组件
 * b. 创建类组件，组件名称的首字母必须是大写的，在 React 当中可以用于区分组件和普通的标记 
 * 
 * 向组件传递数据：
 * 数据发送：
 * a.属性直接编写
 * b.对象形式
 * 数据接收：
 * a.类组件使用props来接收
 * b.函数组件使用一个变量或者解构来接收
 * 
 * 默认值：
 * a.函数组件，默认的 props 属性值，通过 组件名称.defaultProps 来设置一个对象
 * b.类组件来说，直接定义 static defaultProps 来管理需要设置默认值的属性
 * 
 * 函数组件的类型校验，prop-types
 */

const name = '学习前端'
const flag = true;
const obj = {
  name: '加油',
  age: 30
}

function sayHello() {
  return '大家好'
}

const handler1 = (a, b) => {
  console.log(a, b)
}

const handler2 = (ev) => {
  console.log(ev)
}

//自动解构
const arr = [1, 2, 3]
const arr1 = [<p>111</p>, <p>222</p>, <p>333</p>]
const arr2 = [
  {
    id: 1,  //为了性能，需要有一个特定的key
    name: 'zce',
    age: 40,
    salary: 1000000
  },
  {
    id: 2,
    name: 'zoe',
    age: 18,
    salary: 2000000
  }
]

const ret = arr2.map(item => {
  return (
    <li key={item.id}>
      <span>{item.name}--</span>
      <span>{item.age}--</span>
      <span>{item.salary}</span>
    </li>
  )
})

const styleObj = {
  width: 100,
  height: 100,
  backgroundColor: 'green',
  ":hover": { backgroundColor: 'skyblue' },
}

const isLogin = false;
const ButtonStyle = {
  base: {
    width: 150,
    height: 40,
    fontSize: 20,
    background: '#ffff'
  },
  login: {
    background: 'green'
  },
  logout: {
    background: 'orange'
  }
}

const objAbord = {
  name: 'Blend',
  age: 40
}

function App() {
  return (
    <div>
      <p>{name}</p>
      <p>{sayHello()}</p>
      <p>{console.log('11111')}</p>
      <p>{Math.random()}</p>
      <p>{flag ? '登录成功' : '执行登录'}</p>
      <p>{'hello,' + name}</p>
      <p>{JSON.stringify(obj)}</p>
      <p title='自定义标签'>-----添加属性-----</p>
      <p title={name}>-----添加动态属性-----</p>
      <button onClick={() => { handler1(1, 2) }}>点击事件1</button>
      <button onClick={(ev) => { handler2(ev) }}>点击事件2</button>
      <button onClick={handler1}>点击事件3</button>
      <button onClick={handler1.bind(null, 10, 20)}>点击事件4</button>
      <div>{arr}</div>
      <div>{arr1}</div>
      <ul>{ret}</ul>
      <div style={{ width: '100px', background: 'pink' }}>内联样式处理1</div>
      <div style={styleObj}>内联样式处理2</div>
      <div>
        <button style={[
          ButtonStyle.base,
          isLogin ? ButtonStyle.login : ButtonStyle.logout
        ]}>内联样式处理3</button>
        <div className={'box'}>外联样式</div>
      </div>

      <div> <OutStyle /></div>

      <div>向组件传递数据</div>
      {/* <div><ClassAbort name={"小海加油"} age={18} /></div> */}
      <div>
        <ClassAbort {...objAbord} >
          <p>ClassAbort中的P标签</p>
          <span>ClassAbort中的span标签</span>
        </ClassAbort>
      </div>
      {/* <div><FuncAbort name={"小海加油"} age={18}></FuncAbort></div> */}
      {/* <div><FuncAbort {...objAbord}></FuncAbort></div> */}
      <div>
        <FuncAbort>
        <p>FuncAbort中的P标签</p>
          <span>FuncAbort中的span标签</span>
        </FuncAbort>
      </div>
    </div>
  );
}

//需要使用Radium进行包裹
export default Radium(App);
