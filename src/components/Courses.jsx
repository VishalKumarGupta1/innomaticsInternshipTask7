 import './Courses.css'
export default function Courses() {
  return (
    <div  className="head">
       <section id="courses" className="section bg-dark">
        <div className="container">
            <h2 className="text-white bg-dark text-center">Our Courses</h2>
            <div className="row">
                <div className="col-md-4">
                    <img src="https://www.innomatics.in/wp-content/uploads/2023/01/No-1-best-data-science-course-training-institute-in-hyderabad.jpg"
                        className="img-fluid" alt="Data Science Course"/>
                </div>
                <div className="col-md-4">
                    <img src="https://www.innomatics.in/wp-content/uploads/2023/01/Full-Stack-Web-Development-training-program-Innomatics-research-labs-india.png"
                        className="img-fluid" alt="Web Development Course"/>
                </div>
                <div className="col-md-4 ">
                    <img src="https://www.innomatics.in/wp-content/uploads/2023/01/digital-marketing-course-training-hyderabad.jpg"
                        className="img-fluid" alt="Digital Marketing Course"/>
                </div>
                <div className="col-md-4 mt-3">
                    <img src="https://www.innomatics.in/wp-content/uploads/2023/01/big-data-analytics-with-hadoop-training-in-hyderabad-india.jpg"
                        className="img-fluid" alt="Big Data Course"/>
                </div>
                <div className="col-md-4 mt-3">
                    <img src="https://www.innomatics.in/wp-content/uploads/2023/01/AWS-training-institute-Innomatics-research-labs-Kukatpallihyderabad.jpg"
                        className="img-fluid" alt="AWS Course"/>
                </div>
                <div className="col-md-4 mt-3">
                    <img src="https://www.innomatics.in/wp-content/uploads/2023/01/Devops-institute-Innomatics-research-labs-KukatpallyHyderabad.jpg"
                        className="img-fluid" alt="DevOps Course"/>
                </div>
            </div>
        </div>
    </section>

     

    </div>
  )
}
