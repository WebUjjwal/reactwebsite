const PageBanner = (props) => {
    return (
        <>
            <div className='container page_banner'>
                <div className='row'>
                    <div className='col-md-12 '>
                        <h2>{props.heading}</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PageBanner;