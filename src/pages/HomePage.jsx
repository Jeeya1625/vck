import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div>
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Header/>
            <div className="background">
                <div>
                    <article className='article'>
                        <img className='image' src='/images/heading.jpg'></img>
                        <div className="image-text">
                            <h2>Welcome to Vivekanand College!</h2><p>Your journey to excellence starts here.</p>
                            <Link to="/admission" style={{textDecoration:'none'}}>
                            <button className="my-button" onClick style={{outline:'none'}}>Apply Now!</button>
                            </Link>
                        </div>
                    </article>
                    <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>
                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                    <h2>Why Choose Vivekanand College?</h2><hr></hr>
                    <ul type="disc">
                        <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
                        <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
                        <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
                        <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
                        <li><b>Strong Placements:</b> Excellent career opportunities with leading companies.</li>
                    </ul>
                    <h2>Campus Life & Facilities</h2><hr></hr>
                    <img src="/images/advertisement.jpg" alt="College facilities" className='image1'></img>{" "}<img src="/images/campus.jpg" alt="College campus" className='image2'></img>
                    <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p><br></br>
                    <div style={{textAlign:'center'}}>Ready to explore our courses?<br></br><br></br>
                    <Link to="/courses">
                        <button className="my-button" onClick>Explore Courses</button>
                    </Link>
                    </div>
                </div>
            </div>   
            <Footer/>
        </div>
    )
}
export default HomePage;