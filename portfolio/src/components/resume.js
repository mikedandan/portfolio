import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import logo from '../../src/images/md_avatar3.png';



class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              {/* <img
                src="/public/images/md_avatar.png"
                alt="avatar"
                style={{height: '200px'}}
                 /> */}
              <img className="img-responsive" src={logo} alt="logo" style={{ height: '200px' }} />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Mike Dandan</h2>
            <h4 style={{ color: 'grey' }}>Full Stack Engineer / DevOps Engineer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>Highly ethical, driven and experienced professional, combined with technical know-how and effective interpersonal communication. Vast experience in high-volume environments with strong analytical communication and organizational abilities. Complex problem solver able to thrive in fast-paced and challenging roles.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>1171 Synergy Irvine, CA 92614</p>
            <h5>Phone</h5>
            <p>(949) 813-0212</p>
            <h5>Email</h5>
            <p>mikedandan2@gmail.com</p>
            <h5>Web</h5>
            <p>mikedandan.com</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education/Certifications</h2>


            <Education
              startYear={2018}
              endYear={2019}
              course="Full Stack Engineering Bootcamp"
              schoolName="University of California"
              schoolDescription="An intensive 24-week long course dedicated to designing and building web applications. Skills learned consisted of HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node.Js, MySQL, MongoDB, Express.Js, Handlebars.Js, React.Js and more."
            />

            <Education
              startYear={2017}
              schoolName="Lean Six Sigma"
              course="Lean Six Sigma White Belt Certification"
              schoolDescription=""
            />
            <Education
              startYear={2018}
              schoolName="Lean Six Sigma"
              course="Lean Six Sigma Yellow Belt Certification"
              schoolDescription=""
            />
            <Education
              startYear={2019}
              schoolName="Microsoft Azure Certification"
              course="Azure Fundamentals AZ-900 Certification"
              schoolDescription=""
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2016}
              endYear={"Present"}
              jobName="Harbor Health Systems, Newport Beach, CA"
              jobTitle="Deployment Engineer/ Application Support Engineer"
              jobDescriptionOne="●	Effectively collaborate with other departments, stakeholders, and customers on software development, improvements, internal tools, and implementation issues."
              jobDescriptionTwo="●	Worked closely with QA Teams, Business Teams, DBA team and Product Operations teams to identify QA and UAT cycles release schedule to non-prod and prod environments."
              jobDescriptionThree="●	Ownership for Azure SQL server DB deployment and managed the continues integration and continues deployment"
              jobDescriptionFour="●	Migration of on-premise machines/apps to Microsoft Azure Cloud."
              jobDescriptionFive="●	Created dashboards in VSTS for CI/CD pipelines, Work items and bugs."
            />

            <Experience
              startYear={2014}
              endYear={2016}
              jobName="WebSeo Inc. - Irvine, CA"
              jobTitle="Senior Project Manager/Developer (Web Design, Development, SEO)"
              jobDescriptionOne="●	Designed and developed user-friendly websites, including optimized checkout pages for ecommerce platforms that increased user clicks, and customer purchases by 20%."
              jobDescriptionTwo="●	Successfully lead in charge of architecture and development of applications with CSS, Html, JavaScript."
              jobDescriptionThree="●	Effectively assisted in planning and implementing client requirements for software, online applications, and website optimization and SEO."
              jobDescriptionFour="●	Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills
              skill="javascript"
              progress={80}
            />
            <Skills
              skill="HTML/CSS"
              progress={90}
            />
            <Skills
              skill="NodeJS"
              progress={60}
            />
            <Skills
              skill="React"
              progress={40}
            />
            <Skills
              skill="Azure"
              progress={50}
            />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
