import { useState, useEffect } from 'react'

const Update = ({ student, onUpdate, onCancel }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [course, setCourse] = useState('')

  useEffect(() => {
    if (student) {
      setName(student.name || '')
      setEmail(student.email || '')
      setCourse(student.course || '')
    }
  }, [student])

  const courses = ['JavaScript', 'React', 'Python', 'Java', 'Web Development', 'Data Science']

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()
    
    if (trimmedName && trimmedEmail && course) {
      onUpdate(student.id, { 
        name: trimmedName, 
        email: trimmedEmail, 
        course 
      })
    } else {
      alert('Please fill all fields')
    }
  }

  if (!student) return null

  return (
    <div className="container update-container">
      <h2>✏️ Edit Student</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group">
          <label>Course:</label>
          <select 
            value={course} 
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Select a Course</option>
            {courses.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-save">💾 Save Changes</button>
          <button type="button" className="btn-cancel" onClick={onCancel}>✕ Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default Update