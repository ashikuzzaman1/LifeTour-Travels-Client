import React from 'react';
import './Banner.css';
import image from '../../images/banner.png';

const Slide = () => {
    return (
        // slide area start
        <div className="banner-area">
            <div>
                <div className="row">
                    {/* slide area image load */}
                    <div className="col-md-7 image-area">
                        <img className="w-100" src={image} alt="" />
                    </div>
                    {/* slide area text load */}
                    <div className="col-md-5 text-area">
                        <h2>A journey is best measured in friends, rather than miles.</h2>
                        <p>Perhaps travel cannot prevent bigotry, but by demonstrating that all peoples cry, laugh, eat, worry, and die, it can introduce the idea that if we try and understand each other, we may even become friends.Own only what you can always carry with you: known languages, known countries, known people. Let your memory be your travel bag, Don’t listen to what they say. Go see.</p>
                        <input type="text" className="form-control mb-3" placeholder="Search Here!" aria-label="Username" aria-describedby="basic-addon1"/>
                        <button className="btn btn-primary"><i class="fas fa-search"></i> Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;