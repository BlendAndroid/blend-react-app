import React, { Component } from 'react'

import StudentTitle from "./StudentTitle"
import AddStudent from "./AddStudent"
import StudentList from "./StudentList"


class StudentApp extends Component {

    // 初始信息
    state = {
        studentList: [
            {
                "number": "01",
                "name": "zce",
                "age": "40",
                "sex": "男",
                "college": "大前端",
                "hobbies": [
                    "篮球",
                    "足球"
                ]
            },
            {
                "number": "02",
                "name": "zoe",
                "age": "30",
                "sex": "女",
                "college": "python",
                "hobbies": [
                    "篮球",
                    "网球"
                ]
            },
            {
                "number": "03",
                "name": "syy",
                "age": "18",
                "sex": "男",
                "college": "大前端",
                "hobbies": [
                    "篮球"
                ]
            }
        ]
    }


    addStudent = (student, callback) => {
        this.setState({
            studentList: [...this.state.studentList, student]
        }, () => {
            callback()
        })
    }

    removeStudent = (deleteNumber) => {
        //想用index找到原始数据中要被删除的项目，然后再将原始数据重新set

        const studentList = JSON.parse(JSON.stringify(this.state.studentList))

        const index = studentList.findIndex(student => student.number == deleteNumber)

        studentList.splice(index, 1)

        this.setState({ studentList })
    }

    render() {
        return (
            <div className={'container'}>
                <StudentTitle />
                <AddStudent addStudent={this.addStudent} />
                <StudentList studentList={this.state.studentList} removeStudent={this.removeStudent} />
            </div>
        )
    }
}


export default StudentApp