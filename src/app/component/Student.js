import React from 'react'

function Student() {

    const students = [
        {id:1, name: 'Kunal', age: 26},
        {id:2, name: 'Karn', age: 25},
        {id:3, name: 'Jish', age: 27},
        {id:4, name: 'tiger', age: 23},];

  return (
    <div>
    <h1>Student List</h1>
    <ul>
        { students.map(item => {
                return (<li key={item.id}>
                    {item.name}
                    Age : {item.age}
                </li>
                )})
        }
    </ul>
    </div>
  )
}

export default Student