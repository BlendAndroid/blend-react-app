import React, { Component } from 'react'

class AddStudent extends Component {


  state = {
    number: '',
    name: '',
    sex: '女',
    age: '',
    college: '大前端',
    hobbies: [
      {
        id: 1,
        title: '篮球',
        isChecked: false
      },
      {
        id: 2,
        title: '足球',
        isChecked: false
      },
      {
        id: 3,
        title: '网球',
        isChecked: false
      }
    ]
  }

  stateHandler = (ev) => {
    //获取当前的键值
    const value = ev.target.value
    const prop = ev.target.name

    this.setState({
      [prop]: value
    })
  }

  hobbyHandler = (index, ev) => {
    const isChecked = ev.target.checked
    const hobbies = [...this.state.hobbies] //浅拷贝一份
    hobbies[index].isChecked = isChecked
    this.setState({
      hobbies
    })
  }

  //进行深拷贝
  origin = JSON.parse(JSON.stringify(this.state))

  submit = (ev) => {
    ev.preventDefault()
    /**
     * 提交的逻辑，将有用的信息进行整合
     * 1. 筛选出当前选中的爱好
     * 2. 数据整合
     * 3. 回调数据
     * 4. 重置默认值
     */

    const hobbies = this.state.hobbies.filter(hobby => hobby.isChecked).map(hobby => hobby.title)

    //这里的名字必须取的一样，为了之后setState的简写
    const formValue = {
      ...this.state,
      hobbies
    }

    //在回调里面重置原始数据，为了防止数据还没有添加，就已经被重置了
    this.props.addStudent(formValue, () => {
        this.setState(this.origin)
    })
  }

  render() {
    return (
      <div className="col-md-5">
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label>学号</label>
            <input name={'number'} value={this.state.number} onChange={this.stateHandler} type="number" className="form-control" placeholder="请输入学号" />
          </div>
          <div className="form-group">
            <label>姓名</label>
            <input name={'name'} value={this.state.name} onChange={this.stateHandler} type="text" className="form-control" placeholder="请输入姓名" />
          </div>
          <div className="form-group">
            <label>性别&nbsp;&nbsp;</label>
            <label className="checkbox-inline">
              <input name='sex' onChange={this.stateHandler} checked={this.state.sex === '男'} type="radio" value="男" /> 男
            </label>
            <label className="checkbox-inline">
              <input name='sex' onChange={this.stateHandler} checked={this.state.sex === '女'} type="radio" value="女" /> 女
            </label>
          </div>
          <div className="form-group">
            <label>年龄</label>
            <input name={'age'} value={this.state.age} onChange={this.stateHandler} type="number" className="form-control" placeholder="请输入年龄" />
          </div>
          <div className="form-group">
            <label>爱好</label>
            {
              this.state.hobbies.map((hobby, index) => {
                return (
                  <div className='checkbox' key={hobby.id}>
                    <label>
                      <input type={'checkbox'} checked={hobby.isChecked} value={hobby.title} onChange={this.hobbyHandler.bind(this, index)}/>{hobby.title}
                    </label>
                  </div>
                )
              })
            }
          </div>
          <div className="form-group">
            <label>所属学院</label>
            <select name='college' value={this.state.college} onChange={this.stateHandler} className="form-control">
              <option value="大前端">大前端</option>
              <option value="Java">Java</option>
              <option value="python">python</option>
            </select>
          </div>
          <button type="submit" className="btn btn-default">添加</button>
        </form>
      </div>
    )
  }
}

export default AddStudent