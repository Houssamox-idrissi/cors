import React , { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, } from 'react-router-dom';

function StudentEdit(){
    let {id} = useParams();
const [student, setStudent] = useState({})

useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/students/${id}`)
      .then(res => {
        console.log(res);
        setStudent(res.data);
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  }, [id]);

const navigate = useNavigate();

const handleInput= (e) =>{
    e.persist();
    setStudent({...student,[e.target.name]:e.target.value})
}

const updateStudent = (e) => {
    e.preventDefault();

    const data = {
        name : student.name,
        course : student.course
    }

    axios.put(`http://127.0.0.1:8000/api/students/${id}/edit`,data).then(
        res =>{
            alert("the data is updated successfuly");
            navigate('/home');
        }
    )
}

    return(
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl mb-4">Add New Student</h2>
      <form onSubmit={updateStudent}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            onChange={handleInput}
            value={student.name}
            placeholder="Enter name" required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
            Course
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="course"
            onChange={handleInput}
            value={student.course}
            type="text"
            placeholder="Enter course"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-emerald-400 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Student
          </button>
        </div>
      </form>
    </div>
    );
}
export default StudentEdit;