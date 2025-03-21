import '../styles/About.css';
import { useState, useEffect } from "react";

const skills = [
  {name: "JavaScript", category: "Web Development", id: 1},
  {name: "React", category: "Web Development", id: 2},
  {name: "HTML", category: "Web Development", id: 3},
  {name: "CSS", category: "Web Development", id: 4},
  {name: "Supabase", category: "Web Development", id: 5},
  {name: "Firebase", category: "Web Development", id: 6},
  {name: "PHP", category: "Web Development", id: 7},
  {name: "Java", category: "Programming", id: 8},
  {name: "Python", category: "Programming", id: 9},
  {name: "Nodejs", category: "Web Development", id: 10},
  {name: "XAMPP", category: "Web Development", id: 11},
  {name: "Tableau", category: "Tools", id: 12},
  {name: "Power BI", category: "Tools", id: 13},
  {name: "Jira", category: "Tools", id: 14},
  {name: "Confluence", category: "Tools", id: 15},
  {name: "Cloud Integration", category: "Core Competencies", id: 16},
  {name: "Data Visualization", category: "Core Competencies", id: 17},
  {name: "Agile Methodologies", category: "Core Competencies", id: 18},
  {name: "API Integration", category: "Core Competencies", id: 19},
  {name: "Git", category: "Tools", id: 20},
  {name: "Server-Side Scripting", category: "Web Development", id: 21},
  {name: "DSA", category: "Core Competencies", id: 22},
  {name: "Network Compputing", category: "Core Competencies", id: 23},
  {name: "Stripe API", category: "Web Development", id: 24}
]

const uniqueCategories = [...new Set(skills.map(skill => skill.category))];

function About({ theme }){
    const [searchItem, setSearchItem] = useState('');
    const [filteredResults, setFilteredResults] = useState(skills);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleInputChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchItem(searchTerm);
        filterResults(searchTerm, selectedCategories);
    };

    const handleCategoryChange = (category) => {
        const updatedCategories = selectedCategories.includes(category)
            ? selectedCategories.filter(c => c !== category)
            : [...selectedCategories, category];
        
        setSelectedCategories(updatedCategories);
        filterResults(searchItem, updatedCategories);
    };

    const resetFilters = () => {
        setSearchItem('');
        setSelectedCategories([]);
        setFilteredResults(skills);
    };

    const filterResults = (search, categories) => {
        let results = skills;
        
        if (search) {
            results = results.filter(skill => 
                skill.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        
        if (categories.length > 0) {
            results = results.filter(skill => 
                categories.includes(skill.category)
            );
        }
        
        setFilteredResults(results);
    };

    return(
        <div className="container d-flex flex-column mx-auto align-items-center justify-content-center gap-4 mt-2">
            <div className={`card ${theme}-card box-shadow p-3 w-75`} style={{  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
                <h3>Education</h3>
                <h4>Bachelors of Applied Computer Science, Dalhousie University</h4>
                <p>September 2022- April 2026 (Expected)</p>
                <p>•	Relevant Coursework: Server-Side Scripting, Data Structures and Algorithms (DSA), Unit Testing (JUnit5), Object-Oriented programming, Agile Development, Database Systems, Network Computing and Workplace Communication</p>
            </div>
            <div className={`card ${theme}-card box-shadow p-3 w-75`} style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
                <h3>Experience</h3>
                <h4>Software Developer Intern, RadixWeb</h4>
                <p>May – August 2021</p>
                <p>•	Collaborated in a cross-functional team of 6 members to design and implement multiple features, leveraging Agile methodologies to exceed project expectations.<br></br>
                •	Worked with over 20 different clients to help design their web applications by leveraging design concepts like prototyping, usability and requirements testing.
                </p>
            </div>

            <div className={`card ${theme}-card box-shadow p-3 w-75`}>
                <div className="mb-3">
                    <input
                        type="text"
                        value={searchItem}
                        onChange={handleInputChange}
                        placeholder='Type to search'
                        className="form-control mb-3"
                    />
                    
                    <div className="d-flex flex-wrap gap-3 mb-3">
                        {uniqueCategories.map(category => (
                            <div key={category} className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={category}
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => handleCategoryChange(category)}
                                />
                                <label className="form-check-label" htmlFor={category}>
                                    {category}
                                </label>
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={resetFilters}
                        className="btn btn-secondary btn-sm"
                    >
                        Reset Filters
                    </button>
                </div>

                <ul className="list-unstyled skills-list">
                    {filteredResults.map((skill,index) => (
                        <li key={skill.id} className="mb-2" style={{ 
                            animationDelay: `${index * 50}ms`,
                            opacity: 0,
                            animation: 'slideIn 0.3s ease forwards'
                        }}>
                            {skill.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default About