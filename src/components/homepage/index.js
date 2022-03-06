import React from 'react';
import Navbar from '../navbar';
import '../../css/homepage.css';
import { Navigate } from 'react-router-dom';

class Homepage extends React.Component {
    state={
        exploreActive: false,
    }

    exploreActivated = () => {
        this.setState({
            exploreActive: true,
        })
    }
    render() {
        return(
            <div className='page-container-div homepage-container-div'>
                {this.state.exploreActive === true ? <Navigate to='/destination' /> : null}
				<Navbar />
                <div className='page-inside-container-div homepage-inside-container-div'>
                    <div className='homepage-inside-container-text-div'>
                        <h5>So, you want to travel to</h5>
                        <h1>Space</h1>
                        <p>Let's face it; if you want to go to space, you might as well genuinely go to 
                            outer space and not hover kind of on the edge of it. Well sit back, and relax 
                            because we'll give you a truly out of this world experience!
                        </p>
                    </div>

                    <div className='homepage-inside-container-explore-button' onClick={this.exploreActivated}>
                        <h4>Explore</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;