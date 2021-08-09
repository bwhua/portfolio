import React from 'react'

const Education = () => {
  return (
    <div id="education">
      <section className="education">
        <h1 className="section_title section_title-education"> Education</h1>
          <h2 className="section_subtitle section_subtitle-education">B.S.</h2>
        <div className="degree-specs">
          <img src="https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png" alt="CSU Logo" width="25%"/>
          <ul>
            <li>Colorado State University</li>
            <li>College: Natural Science</li>
            <li>Major: Computer Science</li>
            <li>Minor: Mathematics</li>
            <li>GPA: 3.43</li>
          </ul>
        </div>
        
        <h2 className="section_subtitle section_subtitle-education">M.S.</h2>
        <div className="degree-specs">
          <img src="https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png" alt="CSU Logo" width="25%" />
          <ul>
            <li>Colorado State University</li>
            <li>College: Natural Science</li>
            <li>Major: Computer Science</li>
            <li>GPA: 3.67</li>
          </ul>
        </div>

      </section>
    </div>
  )
}

export default Education
