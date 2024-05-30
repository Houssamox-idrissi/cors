import React , { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateStudent(){
const [student, setStudent] = useState({
    name:'',
    course:''
})

const navigate = useNavigate();

const handleInput= (e) =>{
    e.persist();
    setStudent({...student,[e.target.name]:e.target.value})
}

const saveStudent = (e) => {
    e.preventDefault();

    const data = {
        name : student.name,
        course : student.course
    }

    axios.post('http://127.0.0.1:8000/api/students',data).then(
        res =>{
            alert("hello");
            navigate('/home');
        }
    )
}

    return(
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl mb-4">Add New Student</h2>
      <form onSubmit={saveStudent}>
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
            type="text"
            placeholder="Enter course"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
    );
}
export default CreateStudent;