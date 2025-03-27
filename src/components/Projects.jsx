import '../styles/Projects.css';
import axios from 'axios';
import {useEffect, useState}  from 'react';

function Projects({theme}){
    const[projects, setProject] = useState(null);

    useEffect(()=>{
        axios.get("/.netlify/functions/api/projects")
        .then((response) => setProject(response.data))
        .catch((error) => console.error("Error fetching projects: ", error));
    }, []);

    return(      
        <div className={`container d-flex flex-column mx-auto align-items-center justify-content-center gap-4 mt-2`}>
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <a 
              key={index} 
              className={`card ${theme}-card bg-black text-white box-shadow p-3 w-75 pointer rounded`} 
              style={{ border: '1px solid #fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}
            >
              <h4>{project.name}</h4>
              <div className="details mt-2">
                <h5><b>Technologies:</b></h5>
                <div className="resp">
                {project.technologies.map((techPath, i) => (
                  <img
                    key={i}
                    src={techPath}
                    alt={project["tech-name"][i]}
                    className="tech-icon"
                    title={project["tech-name"][i]}
                  />
                ))}
                </div>
                
              </div>
              <ul className="list mt-3">
                {project.info.map((infoItem, idx) => (
                  <li key={idx}>{infoItem}</li>
                ))}
              </ul>
            </a>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    )
}

export default Projects