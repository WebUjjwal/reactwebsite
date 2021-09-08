const ContactInfotype = (props) => {
  return (
    <>
      <div className="col-md-4 gy-3">
          <div className='type_info_box'>
        <div className="icon">
          <i class={props.icon}></i>
        </div>
        <h3>{props.type}</h3>
        <p>{props.typeinfo1}</p>
        <p>{props.typeinfo2}</p>
        </div>
      </div>
    </>
  );
};

export default ContactInfotype;
