import ContactInfotype from "./ContactInfotype";

const ContactInfo = () => {
    return (
        <>
            <div className='container contact_info'>
                <div className='row'>
                   <ContactInfotype 
                   icon='bi bi-geo-alt'
                   type='Our Address'
                   typeinfo1='175 5th Ave, New York, NY 10010, United States'/>

                   <ContactInfotype 
                   icon='bi bi-telephone-inbound'
                   type='Contact'
                   typeinfo1='Mobile: (+44) - 45789 - 5789'
                   typeinfo2='E-mail: hello@rewy.com'/>

                   <ContactInfotype 
                   icon='bi bi-clock'
                   type='Hours of Operation'
                   typeinfo1='Monday - Friday: 09:00 - 20:00'
                   typeinfo2='Sunday & Saturday: 10:30 - 22:00'/>
                </div>
            </div>
        </>
    );
};

export default ContactInfo;