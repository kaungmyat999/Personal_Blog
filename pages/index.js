import Image from "next/image"
import Link from "next/link"
import Typical from 'react-typical'
import Footer from "../components/Footer"
import fs from 'fs';
import path from 'path';
import Certification from "../components/Certification";
import Projects from "../components/Projects";
import Education from '../components/Education'

export default function Blog({certs,pjs}) {
    
    return <div className="main">
      <div className="content" >
        <div className="nav">
          <Link className='link' href='/'><span>George's About </span> </Link> / <Link className='link' href='/resume'> <span>Resume</span> </Link> / <Link className='link' href='/blogs'> <span>Blogs</span> </Link></div>
        <div className="container">
          <div className="left-side">
            <div className="greating">
              <Typical
                steps={['Hi! ', 1000, 'I\'m George Kyaw!', 500]}
                loop={Infinity}
                wrapper="h1"
              />
            </div>
            <p>I’m a US-based machine learning and software development engineer who fueled by curiosity and a commitment to continuous learning, which has equipped me with a solid foundation in software engineering and machine learning. I’m eager to apply my skills in real-world projects, and I’m driven by the desire to innovate and solve complex problems.</p>
            <div className="contact">
              <div className="contact-left"><span>Contacts:</span></div>
              <div className="contact-right">
                <a href='https://github.com/kaungmyat999?tab=repositories'><Image src='/images/github_logo.png' width={40} height={40}/></a>
                <a href='https://www.linkedin.com/in/george-kyaw-472498298/'><Image src='/images/linkedin_logo.png'width={40} height={40}/></a>
                <a href='https://x.com/KaungMy51486739'><Image src='/images/TwitterX.png'width={40} height={40}/></a>
                <a href='kaky2698@colorado.edu'><Image src='/images/mail_icon.png'width={40} height={40}/></a>
              </div>
            </div>

            
          </div>
          <div className="right-side">
            <Image className="profile" src='/images/IMG_1505.JPG' width={350} height={450}/>
            
          </div>
          
        </div>
        <div className="sections">
          <Education />
        </div>
        <div className="sections">
          <Projects pjs={pjs}/>
        </div>
        <div className="sections">
          <Certification certs={certs}/>
        </div>
        
      </div>
      <Footer />
    </div>
}


export async function getStaticProps(){
  const filePath = path.join(process.cwd(), 'data', 'certifications.json');
  const certData = fs.readFileSync(filePath,'utf-8')
  let certsArr =  JSON.parse(certData)

  const filePath2 = path.join(process.cwd(), 'data', 'projects.json');
  const projectData = fs.readFileSync(filePath2,'utf-8')
  let projectArr =  JSON.parse(projectData)

  return {
    props:{
      certs: certsArr,
      pjs:projectArr
    }
  }
}
