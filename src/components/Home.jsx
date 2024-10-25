import './Home.css'
const Home = () => {
  return (
    <>
       <img  className='image' src="https://tse1.mm.bing.net/th?id=OIP.TyUFomsUIMgajoqeDyBK_QHaEK&pid=Api&P=0&h=180"    />

      {/* <!-- About Section --> */}

      <section id="about" className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="display-4">About Us</h2>
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



      {/* <!-- Features Section --> */}
      <section id="features" className="section   text-center text-white">
        <div className="container">
          <h2>Features</h2>
          <p id="featurehead">Discover our unique offerings and services.</p>
          <div className="row">
            <div className="col-md-3">
              <p>Global Leaders in training</p>
              <h4>We have trainers hailing from the fortune companies who understand the real-time business cases
                and can train individuals based on them.</h4>
            </div>
            <div className="col-md-3">
              <p>Hands-on projects & Internship</p>
              <h4>We have trainers hailing from the fortune companies who understand the real-time business cases
                and can train individuals based on them.</h4>
            </div>
            <div className="col-md-3">
              <p>100% Placement Assistance</p>
              <h4>We promise Career Transformation Having collaborations with top-notch companies and a dedicated
                placement .</h4>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- Courses Section --> */}
      <section id="courses" className="section bg-dark">
        <div className="container">
          <h2 className="text-white bg-dark text-center">Our Courses</h2>
          <div className="row">
            <div className="col-md-4">
              <img src="https://www.innomatics.in/wp-content/uploads/2023/01/No-1-best-data-science-course-training-institute-in-hyderabad.jpg"
                className="img-fluid" alt="Data Science Course" />
            </div>
            <div className="col-md-4">
              <img src="https://www.innomatics.in/wp-content/uploads/2023/01/Full-Stack-Web-Development-training-program-Innomatics-research-labs-india.png"
                className="img-fluid" alt="Web Development Course" />
            </div>
            <div className="col-md-4 ">
              <img src="https://www.innomatics.in/wp-content/uploads/2023/01/digital-marketing-course-training-hyderabad.jpg"
                className="img-fluid" alt="Digital Marketing Course" />
            </div>
            <div className="col-md-4 mt-3">
              <img src="https://www.innomatics.in/wp-content/uploads/2023/01/big-data-analytics-with-hadoop-training-in-hyderabad-india.jpg"
                className="img-fluid" alt="Big Data Course" />
            </div>
            <div className="col-md-4 mt-3">
              <img src="https://www.innomatics.in/wp-content/uploads/2023/01/AWS-training-institute-Innomatics-research-labs-Kukatpallihyderabad.jpg"
                className="img-fluid" alt="AWS Course" />
            </div>
            <div className="col-md-4 mt-3">
              <img src="https://www.innomatics.in/wp-content/uploads/2023/01/Devops-institute-Innomatics-research-labs-KukatpallyHyderabad.jpg"
                className="img-fluid" alt="DevOps Course" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- classNamerooms Section --> */}
      <section id="classNamerooms" className="section bg-danger text-center">
        <div className="container">
          <h2 className="text-white">Classrooms</h2>
          <div className="row">
            <div className="col-md-4">
              <img src="https://www.innomatics.in/wp-content/uploads/cache/2023/01/IMG_5450-scaled/2374760138.jpg"
                className="img-fluid" alt="classNameroom 1" />
            </div>
            <div className="col-md-4">
              <img src="https://www.innomatics.in/wp-content/uploads/cache/2023/01/IMG_5414-scaled/2727721008.jpg"
                className="img-fluid" alt="classNameroom 2" />
            </div>
            <div className="col-md-4">
              <img src="https://www.innomatics.in/wp-content/uploads/cache/2023/01/IMG_5452-scaled/2408469614.jpg"
                className="img-fluid" alt="classNameroom 3" />
            </div>
          </div>
        </div>
      </section>
    </ >
  )
}

export default Home
