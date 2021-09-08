import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <>
      <section id="testimonial_bg">
        <div className="container">
          <div className="section_title">
            <p className="section_tag">TESTIMONIALS</p>
            <h2 className="section_heding">
            What Our Clients are Saying?
            </h2>
            <p className="section_descrip">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br /> tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="row">
              <div className='col-md-1'></div>
            <TestimonialCard 
            para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.'
            img='./img/testimonial1.png'
            name='Sarah Taylor'
            worktype='CEO at ThemeForest'/>

            <TestimonialCard 
            para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.'
            img='./img/testimonial2.png'
            name='Alex Maxwell'
            worktype='CEO at Envy Theme'/>

            <div className='col-md-1'></div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
