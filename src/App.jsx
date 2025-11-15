import { useState, useEffect } from 'react'
import Insert from './components/Insert'
import Fetch from './components/Fetch'
import Update from './components/Update'
import './App.css'

const App = () => {
  const [students, setStudents] = useState([])
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('students')
    if (saved) setStudents(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students))
  }, [students])

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }])
  }

  const deleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id))
    if (editId === id) setEditId(null)
  }

  const updateStudent = (id, data) => {
    setStudents(students.map(s => s.id === id ? { ...s, ...data } : s))
    setEditId(null)
  }

  const editStudent = students.find(s => s.id === editId)

  return (
    <div className="app-container">
      <header className="header">
        <h1>📚 Student Management System</h1>
      </header>
      
      <div className="content">
        <div className="section">
          <Insert onAdd={addStudent} />
        </div>

        <div className="section">
          <Fetch 
            students={students}
            onEdit={setEditId}
            onDelete={deleteStudent}
          />
        </div>

        {editStudent && (
          <div className="section">
            <Update 
              student={editStudent}
              onUpdate={updateStudent}
              onCancel={() => setEditId(null)}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default App