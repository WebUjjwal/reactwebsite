import React from 'react';


const Banner = () => {
	return(
		<>
			<div className="main_banner banner_bacground">
				<div className='container banner_items'>
					<div className='banner_content'>
						<p className='title'>DIGITAL MARKETING</p>
						<h1>Digital Agency with Excellence Service</h1>
						<p className='banner_para'>We have created a cloud based tool to do your all boring tasks related to <br /> 
						data analysis and decesion making based on the nature of data!</p>
						<button className="bann_btn" type="submit">learn more</button>
					</div>

					<div className='banner_img'>
						<img src='./img/banner-img.png' className='fluid-img' alt='banner_img' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;