import Link from "next/link";

export default function Projects({pjs}) {
    console.log(pjs.projects);
    
    return <>
        <h2 className='subtitle'>PROJECTS</h2>
          <div className="timeline_container">
            <div className="timeline">
              <ul>
                {pjs.projects.map((project,index) => {
                    return (
                        <li key={index}>
                            <Link href={project.link} >
                                <span >{project.name}</span>
                            </Link>
                        </li>
                    )
                })}
                
                
              </ul>
            </div>
        </div>
    
    
    </>
    
}