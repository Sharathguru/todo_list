import { useState } from 'react'

const Insert = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [course, setCourse] = useState('')

  const courses = ['JavaScript', 'React', 'Python', 'Java', 'Web Development', 'Data Science']

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() && email.trim() && course) {
      onAdd({ name, email, course })
      setName('')
      setEmail('')
      setCourse('')
      alert('Student added successfully!')
    } else {
      alert('Please fill all fields!')
    }
  }

  return (
    <div className="container">
      <h2>➕ Add Student</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Course:</label>
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">Select a Course</option>
            {courses.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn-add">+ ADD</button>
      </form>
    </div>
  )
}

export default Insert