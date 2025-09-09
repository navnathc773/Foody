import '../style/About.css';
export const About=()=>{
    return(
        <>
        <div className='localite'>
            <div>
                <video src="https://res.cloudinary.com/de0gfcyix/video/upload/v1757430346/Green_Brown_Minimalist_Bakery_Youtube_Video_Ad_rokbu1.mp4"
                style={{width:"500px",height:"250px",
                    position:"relative",
                    left:"100px",
                    top:"140px"
                }} autoPlay muted loop playsInline></video>
            </div>
            <div className='details'>
                <p>Foodie is a an online ecommerce platform providing variety of food products. The uniqueness and quality of product make us  competitive in market.</p>
                <div className='second'>
                    <p>Platform offers a variety range of products including pizza,delicious cakes, donut and many more. </p>
                </div>

                <div className='third'>
                    <p>For ease to use website offers categorization of products. Product maker has done a professional course of cooking and is able to make products which are not belong to our country</p>
                </div>
            </div>
        </div>
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.046755006905!2d73.87805497465058!3d18.44739377140646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebe1667700c9%3A0x196eb1361057e998!2sBarsana-Dham%20C-Wing%2C%20Behind%20ISKCON%20NVCC!5e1!3m2!1sen!2sin!4v1757427239097!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
    )
}