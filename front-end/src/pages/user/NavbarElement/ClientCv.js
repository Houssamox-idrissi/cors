import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavbarClient from "../../../component/navbarClient";
import Footer from "../../../component/footer";
import AuthService from '../services/AuthServices';

function ClientCV() {
    const [cvData, setCvData] = useState({
        ecole: '',
        diplome: '',
        domaine: '',
        dateDebut: '',
        dateFin: '',
        activite: '',
        description: '',
        competences: '',
        cvMedia: null
    });
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
            navigate('/login'); // Redirect to login if not authenticated
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCvData({ ...cvData, [name]: value });
    };

    const handleFileChange = (e) => {
        setCvData({ ...cvData, cvMedia: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('ecole', cvData.ecole);
        formData.append('diplome', cvData.diplome);
        formData.append('domaine', cvData.domaine);
        formData.append('dateDebut', cvData.dateDebut);
        formData.append('dateFin', cvData.dateFin);
        formData.append('activite', cvData.activite);
        formData.append('description', cvData.description);
        formData.append('competences', cvData.competences);
        formData.append('cvMedia', cvData.cvMedia);

        axios.post('http://127.0.0.1:8000/api/cvs', formData, {
            headers: {
                Authorization: `Bearer ${AuthService.getCurrentUser().token}`
            }
        })
            .then(res => {
                alert("CV added successfully");
                navigate('/client/home');
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <>
            <NavbarClient />
            <br /><br />
            {authenticated && (
                <div className="max-w-md mx-auto mt-10 bg-slate-50 shadow-lg rounded-lg overflow-hidden">
                    <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
                        Add New CV
                    </div>
                    <form className="py-4 px-6" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="ecole" className="block text-gray-700 font-bold mb-2">
                                School
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="ecole"
                                name="ecole"
                                type="text"
                                placeholder="Enter school name"
                                value={cvData.ecole}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="diplome" className="block text-gray-700 font-bold mb-2">
                                Degree
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="diplome"
                                name="diplome"
                                type="text"
                                placeholder="Enter degree"
                                value={cvData.diplome}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="domaine" className="block text-gray-700 font-bold mb-2">
                                Field
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="domaine"
                                name="domaine"
                                type="text"
                                placeholder="Enter field"
                                value={cvData.domaine}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dateDebut" className="block text-gray-700 font-bold mb-2">
                                Start Date
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="dateDebut"
                                name="dateDebut"
                                type="date"
                                value={cvData.dateDebut}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dateFin" className="block text-gray-700 font-bold mb-2">
                                End Date
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="dateFin"
                                name="dateFin"
                                type="date"
                                value={cvData.dateFin}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="activite" className="block text-gray-700 font-bold mb-2">
                                Activities and Associations
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="activite"
                                name="activite"
                                type="text"
                                placeholder="Enter activities"
                                value={cvData.activite}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                                Description
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description"
                                name="description"
                                rows="4"
                                placeholder="Enter description"
                                value={cvData.description}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="competences" className="block text-gray-700 font-bold mb-2">
                                Skills
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="competences"
                                name="competences"
                                type="text"
                                placeholder="Enter skills"
                                value={cvData.competences}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="cvMedia" className="block text-gray-700 font-bold mb-2">
                                Add Your CV
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cvMedia"
                                name="cvMedia"
                                type="file"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <div className="flex items-center justify-center mb-4">
                            <button
                                className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Submit CV
                            </button>
                        </div>
                    </form>
                </div>
            )}
            <br /><br /><br /><br /><br />
            <Footer />
        </>
    );
}

export default ClientCV;
