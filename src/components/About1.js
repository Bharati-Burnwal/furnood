import Aboutcard from "./Aboutcard";

const About1 = () => {
    return(
        <div className='about1'>
                <div className='container'>
                    <div className='row'>
                       <div className='col-md-12 mx-auto sec-title'>
                            <h2 className="text-center">Browse The Range</h2>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                       </div> 
                       <div className='col-md-4'>
                        <Aboutcard image = './images/range1.png' room = 'Kitchen'/>
                       </div>
                       <div className='col-md-4'>
                        <Aboutcard image = './images/range2.png' room = 'Living'/>
                       </div>
                       <div className='col-md-4'>
                        <Aboutcard image = './images/range3.png' room = 'Bedroom'/>
                       </div>
                    </div>
                </div>
            </div> 
    );
}

export default About1;