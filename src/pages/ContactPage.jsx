import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"


const ContactPage = () => {
    return(
        <div>
            <Header/>
            <div className="background">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            <h2>General Enquiries</h2><hr></hr>
            <h4>Vivekanand College Main Campus</h4>
            <p>[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
India</p>
            <p>Phone: **+91 12345 67890**
Email: **info@vivekanandcollege.edu**
Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
            <h2>Admissions Office</h2><hr></hr>
            <p>For all admission-related queries regarding undergraduate or postgraduate programs:
Phone: +91 98765 43210
Email: admissions@vivekanandcollege.edu</p>
            <h2>Student Support Services</h2><hr></hr>
            <p>For current student support, academic advising, or general assistance:
Phone: +91 87654 32109
Email: studentsupport@vivekanandcollege.edu</p>
            <h2>Find Us on the Map</h2><hr></hr>
            <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
            <a href="https://maps.app.goo.gl/5CycVWMvkennwqCu7">View On Google Maps</a>
            <h2>Send Us a Message</h2><hr></hr>
            <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
            </div>
            <Footer/>
        </div>
    )
}
export default ContactPage;