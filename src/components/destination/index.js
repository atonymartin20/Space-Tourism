import React from 'react';
import Navbar from '../navbar';
import '../../css/destination.css';
import { destinations } from '../../data.json';
import MoonIMG from '../../assets/destination/image-moon.png';
import MarsIMG from '../../assets/destination/image-mars.png';
import EuropaIMG from '../../assets/destination/image-europa.png';
import TitanIMG from '../../assets/destination/image-titan.png';

class Destination extends React.Component {
    state={
        destinations: {},
        option1active: false,
        option2active: false,
        option3active: false,
        option4active: false,
    }

    componentDidMount = () => {
        this.setState({
            destinations,
            option1active: true,
        })

        console.log(destinations)
    }

    chooseOption1 = (event) => {
        event.preventDefault();
        this.setState({
            option1active: true,
            option2active: false,
            option3active: false,
            option4active: false,
        })
    }

    chooseOption2 = (event) => {
        event.preventDefault();
        this.setState({
            option1active: false,
            option2active: true,
            option3active: false,
            option4active: false,
        })
    }

    chooseOption3 = (event) => {
        event.preventDefault();
        this.setState({
            option1active: false,
            option2active: false,
            option3active: true,
            option4active: false,
        })
    }

    chooseOption4 = (event) => {
        event.preventDefault();
        this.setState({
            option1active: false,
            option2active: false,
            option3active: false,
            option4active: true,
        })
    }

    render() {
        if(this.state.destinations.length === 4) {
            return(
                <div className='page-container-div destination-container-div'>
                    <Navbar />
                    <div className='page-inside-container-div destination-inside-container-div'>
                        <h5><span>01</span> Pick your destination</h5>

                        <div className='destination-content-container'>
                            <div className='destination-content-left-container'>
                                {this.state.option1active === true ? <img src={MoonIMG} alt='Moon' />: null}
                                {this.state.option2active === true ? <img src={MarsIMG} alt='Mars' />: null}
                                {this.state.option3active === true ? <img src={EuropaIMG} alt='Europa' />: null}
                                {this.state.option4active === true ? <img src={TitanIMG} alt='Titan' />: null}
                            </div>

                            <div className='destination-content-right-container'>
                                <div className='destination-content-right-container-destination-selector'>
                                    <span className={this.state.option1active === true ? 'destination-active-nav-text' : 'destination-nav-text'} onClick={this.chooseOption1}>{this.state.destinations[0].name}</span>
                                    <span className={this.state.option2active === true ? 'destination-active-nav-text' : 'destination-nav-text'} onClick={this.chooseOption2}>{this.state.destinations[1].name}</span>
                                    <span className={this.state.option3active === true ? 'destination-active-nav-text' : 'destination-nav-text'} onClick={this.chooseOption3}>{this.state.destinations[2].name}</span>
                                    <span className={this.state.option4active === true ? 'destination-active-nav-text' : 'destination-nav-text'} onClick={this.chooseOption4}>{this.state.destinations[3].name}</span>
                                </div>

                                <div className='destination-content-right-container-info'>
                                    <h2>
                                        {this.state.option1active === true ? `${this.state.destinations[0].name}` : null}
                                        {this.state.option2active === true ? `${this.state.destinations[1].name}` : null}
                                        {this.state.option3active === true ? `${this.state.destinations[2].name}` : null}
                                        {this.state.option4active === true ? `${this.state.destinations[3].name}` : null}
                                    </h2>

                                    <p>
                                        {this.state.option1active === true ? `${this.state.destinations[0].description}` : null}
                                        {this.state.option2active === true ? `${this.state.destinations[1].description}` : null}
                                        {this.state.option3active === true ? `${this.state.destinations[2].description}` : null}
                                        {this.state.option4active === true ? `${this.state.destinations[3].description}` : null}
                                    </p>
                                    
                                    <div className='destination-content-right-container-divider-line' />

                                    <div className='destination-content-right-container-info-bottom-portion'>
                                        <div className='destination-content-right-container-info-bottom-portion-left-side'>
                                            <span className='sub2'>Avg. Distance</span>
                                            <span className='sub1'>
                                                {this.state.option1active === true ? `${this.state.destinations[0].distance}` : null}
                                                {this.state.option2active === true ? `${this.state.destinations[1].distance}` : null}
                                                {this.state.option3active === true ? `${this.state.destinations[2].distance}` : null}
                                                {this.state.option4active === true ? `${this.state.destinations[3].distance}` : null}
                                            </span>
                                        </div>    

                                        <div className='destination-content-right-container-info-bottom-portion-right-side'>
                                            <span className='sub2'>Est. Travel Time</span>
                                            <span className='sub1'>
                                                {this.state.option1active === true ? `${this.state.destinations[0].travel}` : null}
                                                {this.state.option2active === true ? `${this.state.destinations[1].travel}` : null}
                                                {this.state.option3active === true ? `${this.state.destinations[2].travel}` : null}
                                                {this.state.option4active === true ? `${this.state.destinations[3].travel}` : null}
                                            </span>
                                        </div>    
                                    </div>
                                </div>
                            </div>  
                        </div>

                    </div>
                </div>
            )
        }

        else {
            return null;
        }
    }
}

export default Destination;