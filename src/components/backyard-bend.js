import React from 'react';
import '../assets/css/backyard-bend.css';
import bybtitle from '../assets/images/backyard_bend/BYBLogoGrey.png';
import subaru from '../assets/images/backyard_bend/subaru.jpg';
import mothersbyb from '../assets/images/backyard_bend/mothersbyb.jpg';
import powderhouse from '../assets/images/backyard_bend/powderhouse.jpg';

const BackyardBend = () => {
    return (
        <div className="byb-master-cont">
            <div className="byb-info-radio-group">
                <div className="title-cont">
                    <a target="_blank" href="https://backyardbend.com/">
                        <img src={bybtitle} />
                    </a>
                </div>
                <div className="byb-promo-sponsors-cont">
                    <h4>
                        Check out the latest featured video from <span><a target="_blank" href="https://backyardbend.com/">Backyard Bend</a></span> below, courtesy of our sponsors:
                    </h4>
                    <div className="byb-sponsor-imgs-cont">
                        <a target="_blank" href="https://www.subaruofbend.com/">
                            <img src={subaru} alt="Subaru of Bend" />
                        </a>
                        <a target="_blank" href="https://mothersjuicecafe.com/">
                            <img src={mothersbyb} alt="Mother's Juice Cafe" />
                        </a>
                        <a target="_blank" href="http://powderhousebend.com/index.html">
                            <img src={powderhouse} alt="Mother's Juice Cafe" />
                        </a>
                    </div>
                    <p>
                        At <span><a target="_blank" href="https://backyardbend.com/">Backyard Bend</a></span>, we want to know where you’ve been and what you’ve been up to.
                        Hashtag your <a target="_blank" href="https://www.instagram.com/explore/tags/backyardbend/">instagram</a> and <span><a target="_blank" href="https://twitter.com/hashtag/backyardbend">twitter</a></span> posts and
                        make sure to geotag your location to be featured on the site.
                    </p>
                    <h2><a target="_blank" href="https://www.instagram.com/explore/tags/backyardbend/">#backyardbend</a></h2>
                </div>
            </div>

            <div className="byb-from-byb-cont">
                <div>
                    <div className="video">
                        <h2>Video: BYB Last Minute Gift Guide Vol 1</h2>
                        <iframe src="https://www.youtube.com/embed/AgkmX8dVRSE"
                            frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                        </iframe>
                    </div>
                    <p>
                        We took some laps around town to find some last minute gift ideas for the Backyard Bender on your list. It’s great to support our local outdoor gear retailers. They provide knowledge, support, service, gear when we need it and local jobs for the passionate people we need in our community . Check it out and shop local if you can. Merry Christmas and Happy Holidays!!!
                </p>
                    <p>
                        Our thanks to Subaru of Bend, Powder House Ski and Snowboard and Mother’s Juice Cafe for their help in supporting <a href="https://backyardbend.com/">BackyardBend.com.</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BackyardBend;