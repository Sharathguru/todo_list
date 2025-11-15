const Fetch = ({ students, onEdit, onDelete }) => {
  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      onDelete(id)
    }
  }

  return (
    <div className="container">
      <h2>📋 Student List</h2>
      {students.length === 0 ? (
        <p className="no-data">No students added yet</p>
      ) : (
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={s.id}>
                  <td>{i + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.course}</td>
                  <td className="actions">
                    <button className="btn-edit" onClick={() => onEdit(s.id)}>
                      ✎ Edit
                    </button>
                    <button className="btn-delete" onClick={() => handleDelete(s.id, s.name)}>
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Fetch