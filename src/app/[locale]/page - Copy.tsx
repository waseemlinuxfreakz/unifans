import Image from 'next/image'
import Logo from '../assets/img/logo.svg';
import Twiter from '../assets/img/twiter.svg';
import Instagram from '../assets/img/inst.svg';
import Facebook from '../assets/img/fb.svg';
import Globe from '../assets/img/globe.svg';

export default function Home() {
  return (
    <>
        <header>
            <div className="container">
                <div className="headerRow">
                    <div className="headerLeft">
                        <a href="#" className="navBrand">
                            <img src="/img/logo.svg" alt="" />
                        </a>
                    </div>
                    <div className="headerRight">
                        {/* <div className="headerGroupBtn">
                            <a href="#" className='fan'>Fan</a>
                            <a href="#" className='contentCreator'>Content Creator</a>
                        </div> */}
                        <a href="#" className='login'>Login</a>
                    </div>
                </div>
            </div>
        </header>
        
        <main>
            <div className="heorArea">
                <img src="/img/hero-art-right.png" alt="homeArtRight" className="homeArtRight" />
                <img src="/img/heor-art-left.png" alt="homeArtLeft" className="homeArtLeft" />
                <div className="container">
                    <div className="homeContainer">
                        <div className="homeConten">
                            <h1>
                                <b className='color-blue'>Helping Students</b> Through Their <b>Hardest Times</b>
                            </h1>
                            <p className="checkText">
                                <img src="/img/check-circle.svg" alt="Checkbox" /> 
                                <span>All creators are verified university students</span>
                            </p>
                            <div className="homeSearch">
                                <form action="#">
                                    <div className="searchCol">
                                        <img src="/img/search.svg" alt="Search" className='searchIcon' />
                                        <input type="search" placeholder='Search by University' name='searchUnivercity' id='searchUnivercity' />
                                        {/* <button type='button'>Search</button> */}
                                    </div>
                                </form>
                                <div className="searchBtn">
                                    <a href="#">Sign up as a fan</a>
                                    <a href="#">Sign up as a content creator</a>
                                </div>
                            </div>
                        </div>
                        <div className="homeImg">
                            <img src="/img/hero-banar.png" alt="HomeBanar" />
                        </div>
                    </div>
            </div>
            </div>
        </main>

        <footer>
            <div className="container">
                <div className="footerRow">
                    <div className="footerCol">
                        <div className="footerAbout">
                            {/* <a href="#"><img src={Logo} alt="Unifans" /></a> */}
                            <ul className="social">
                                <li><a href="#"><img src="/img/twiter.svg" alt="Social Icons" /></a></li>
                                <li><a href="#"><img src="/img/inst.svg" alt="Social Icons" /></a></li>
                                <li><a href="#"><img src="/img/fb.svg" alt="Social Icons" /></a></li>
                            </ul>
                            <div className="languageDrop">
                                <div className="languageDrop">
                                    <img src="/img/globe.svg" alt="Globe" />
                                    <span className='textEng'>English</span>
                                    <span className='textAr'>Arabic</span>
                                    <ul>
                                        <li><a href="./">English</a></li>
                                        <li><a href="./">Arabic</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footerCol">
                        <div className="quickLinkWidget">
                            <h3>Pages</h3>
                            <ul className="quickLinks">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">DMCA</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Store</a></li>
                                <li><a href="#">Cookie Notice</a></li>
                                <li><a href="#">Anti-Slavery</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footerCol">
                        <div className="quickLinkWidget">
                            <h3>Others</h3>
                            <ul className="quickLinks">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">USC2257</a></li>
                                <li><a href="#">Fan and Creator</a></li>
                                <li><a href="#">Branding</a></li>
                                <li><a href="#">Complaints Policy</a></li>
                                <li><a href="#">Standard Contract Between</a></li>
                                <li><a href="#">Acceptable Use Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                Copyright © 2023 | Designed by Lorem Ipsum.
            </div>
        </footer>
    </>
  )
}