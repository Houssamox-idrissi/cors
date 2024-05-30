import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../component/loading";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.mjs`;
function PDFViewer({ pdfUrl }) {
  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

function Formule() {
  const [cv, setCv] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/cvs`)
      .then(res => {
        console.log(res.data.cvs);
        setCv(res.data.cvs);
        setLoading(false);
      })
      .catch(error => {
        console.log("Error fetching data", error);
      });
  }, []);

  const deleteCv = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/cvs/${id}`)
      .then(res => {
        setCv(cv.filter(item => item.id !== id));
        alert("Done")
      })
      .catch(error => {
        console.log("Error deleting CV", error);
      });
  };



  if (loading) {
    return <Loading />;
  }

  return (
    <div className='mt-20 ml-80'>
      <table className="table-auto w-full">
        <thead className="text-white">
          <tr>
            <th className="px-4 py-2" style={{ fontStyle: 'italic' }}>Ecole</th>
            {/* other table headings */}
            <th className="px-4 py-2" style={{ fontStyle: 'italic' }}>Document</th>
            <th className="px-4 py-2" style={{ fontStyle: 'italic' }}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cv.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{item.ecole}</td>
              {/* other table data */}
              <td>
                {console.log(`http://127.0.0.1:8000/${item.cvMedia.replace('public', 'storage')}`)}
                {item.cvMedia && (
                  <>
                    {item.cvMedia.endsWith('.pdf') && (
                      <PDFViewer pdfUrl={`http://127.0.0.1:8000/${item.cvMedia.replace('public', 'storage')}`} />
                    )}
                    {(item.cvMedia.endsWith('.docx|doc') || item.cvMedia.endsWith('.docx')) ? (
                      <a href={`http://127.0.0.1:8000/${item.cvMedia.replace('public', 'storage')}`} target="_blank" rel="noopener noreferrer">View Document</a>
                    ) : (
                      <img src={`http://127.0.0.1:8000/${item.cvMedia.replace('public', 'storage')}`} className="img-fluid" style={{ maxWidth: '100px' }} alt="CV" />
                    )}
                  </>
                )}
              </td>
              <td>
                <button type="button" onClick={() => deleteCv(item.id)} className="inline-block w-6 h-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Formule;
