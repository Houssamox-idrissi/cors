import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../component/loading';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Student() {
  const [loading, setloading] = useState(true)
  const [students, setStudents] = useState([]);
  var navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/students`)
      .then(res => {
        console.log(res);
        setStudents(res.data);
        setloading(false)
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }

  const deleteStudent=(e,id) =>{

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting..."

    axios.delete(`http://127.0.0.1:8000/api/students/${id}`).then(res=>{
      window.location.reload();
      navigate('/student');
    })
  }

  return (
    <div className='mt-20 ml-80'>
      <Link to="/student/create" className='ml-40 mb-10 px-6 py-2 bg-blue-400 text-white rounded-lg'> Add</Link>
      <table className="table-auto mt-5 ml-40">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 text-center">ID</th>
            <th className="px-4 py-2 text-center">Name</th>
            <th className="px-4 py-2 text-center">Course</th>
            <th className="px-4 py-2 text-center">Edit</th>
            <th className="px-4 py-2 text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          {students && students.length > 0 ? (
            students.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.course}</td>
                <td className="px-4 py-2 bg-green-500 text-center">
                  <Link to={`/edit/${item.id}/student`}>Edit</Link>
                   </td>
                <td className="px-4 py-2 bg-red-500 text-center">
                  <button type="button" onClick={(e) => deleteStudent(e,item.id)} >Delete</button> 
                  </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">Loading...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Student;
