import React from 'react';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <div className="about-area">
             <div className="container">
                <div>
                    {/* about goals area */}
                    <h2><i class="fas fa-bullseye"></i> Our Goals:</h2>
                    <p>Whether you’re planning a trip, battling post-trip blues, or just aimlessly scrolling through your phone, you can be sure there is a quote about travelling somewhere out there that will hit the spot for you.
                    There are travel quotes about finding yourself, travel quotes to inspire your next trip, great travel quotes that push you to live your best life and more.
                    We can all relate to inspiring travel quotes, which is what makes them so fun to read. In this post I’ve put together some of the most famous travel quotes (and my personal favourites).
                    I hope you will find these awesome travel quotes inspiring and they will make you want to head out and see some more of the world!
                    </p>
                    {/* about course area */}
                    <h2 className="course-area"><i class="fab fa-discourse"></i> Our Tour Details</h2>
                    <p>
                        <p>1. 5 Star Hotel</p>
                        <p>2. Food Allowance</p>
                        <p>3. 24 Hours Security</p>
                        <p>4. Own Transports</p>
                    </p>
                </div>
                {/* about support area */}
                <div className="row support-area">
                    <div className="col-md-12">
                        <h3><i class="fas fa-hourglass-start"></i> 24/7 Online Support</h3>
                        <p>24/7 Online Support- We always listen to our students. Any time they are in a problem, our team is always online for providing support to them. Even at night, we are online for your projects ongoing.Travel quotes are there to express the feeling you experienced while traveling. Combine the best travel quotes with the power of an image and instantly let people have a taste of your travel feelings. This collection of travel quotes is made to inspire and motivate you and others to pack your bags and go explore! Or simply to add as a travel caption under your brand new Instagram post or to pin to your Pinterest. Also, read our adventure quotes to spark your wanderlust!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;