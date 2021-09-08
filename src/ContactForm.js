const ContactFrom = () => {
  return (
    <>
      <div className="container contact_form">
        <div className="row">
          <div className="section_title">
            <p className="section_tag">GET IN TOUCH</p>
            <h2 className="section_heding">Ready to Get Started?</h2>
            <p className="section_descrip">
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <div className='col-md-1'></div>
          <div className="col-md-5">
            <img src="./img/contact.png" className="img-fluid" />
          </div>

          <div className="col-md-5">
            <div className="form_main">
              <form action="#" >
                <input type="text" placeholder="your name" required />
                <input type="email" placeholder="your emal address" required />
                <input
                  type="text"
                  placeholder="your phone number"
                  minLength="10"
                  maxLength="10"
                  required
                />
                <textarea className='input_message' placeholder="Write your message..." required />
                <input className='form_btn' type='submit' value='Submit' />
              </form>
            </div>
          </div>
          <div className='col-md-1'></div>
        </div>
      </div>
    </>
  );
};

export default ContactFrom;
