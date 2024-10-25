import './About.css'
export default function About() {
  return (
    <div>


      <section id="about" className="  py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="display-4"><b>About Us</b></h3>
              <p className="lead">Innomatics Research Labs is a pioneer in “Transforming Careers and Lives” of
                individuals in the Digital Space . </p>
              <p>Advanced training on NASSCOM Future skills prime Certified Data Science, Python, Predictive
                Analytics Modeler, Machine Learning, Artificial Intelligence (AI), Full-stack web development,
                Amazon Web Services (AWS), DevOps, Microsoft Azure, Big data Analytics, Digital Marketing, and
                Career Launching program for students .</p>
            </div>
            <div className="col-lg-6">
              <img src="https://media.glassdoor.com/l/ab/34/f8/ad/front-desk.jpg" alt="About Us"
                className="img-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
