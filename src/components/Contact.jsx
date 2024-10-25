import './Contact.css'

export default function Contact() {
  return (
     <section id="contact" className="section bg-warning">
        <div className="container">
            <h2>Contact Us</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input placeholder="Enter Your Name" type="text" className="form-control" id="name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input placeholder="Enter Your Email" type="email" className="form-control" id="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea placeholder="Enter Your Message" className="form-control" id="message" rows="4"
                        required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
    </section>
  )
}
