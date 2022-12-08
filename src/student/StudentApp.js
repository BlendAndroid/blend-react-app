import React, { Component } from 'react'

import StudentTitle from "./StudentTitle"
import AddStudent from "./AddStudent"
import StudentList from "./StudentList"


class StudentApp extends Component {


    render() {
        return (
            <div className={'container'}>
                <StudentTitle />
                <AddStudent />
                <StudentList />
            </div>
        )
    }
}


export default StudentApp