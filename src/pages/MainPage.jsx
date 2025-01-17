import React, {useEffect} from 'react';
import Section from '../components/Section';
import Footer from '../components/Footer';
import '../style/MainPage.css';
import closedBook from '../static/closedBook.png';
import Link from '../components/Link';
import pixelComputer from '../static/pixelComputer.png';
import rubyIcon from '../static/rubyRailsIcon.png';
import cppIcon from '../static/cppIcon.png';
import netIcon from '../static/vbIcon.png';
import reactIcon from '../static/reactIcon.png';
import javaIcon from '../static/javaIcon.png';
import pythonIcon from '../static/pythonIcon.png';
import nodeIcon from '../static/nodeIcon.jpg';
import sqlIcon from '../static/sqlIcon.jpg';
import volleyball from '../static/pixelvolleyball.png';
import hulusi from '../static/hulusi.png';
import emailIcon from '../static/redEmail.png';
import Header from '../components/Header';

const MainPage = () => {
    useEffect(() => {
        const elem = document.getElementById(window.location.hash.substring(1));
        if (elem) {
            elem.scrollIntoView(false);
        }
    },[]);

    return (
        <>
        <Header />
        <div className="_mainPageDiv">
            
            <Section className="_aboutSection">
                <div className="_aboutText">
                    <div className="_typewriterContainer">
                        <div className="_wrapper"> <div className="_aboutTextTitle">Hello, my name is Peter Jiang</div></div>
                        <div className="_wrapper"><div className="_aboutTextDesc">Full-stack software developer based in the USA</div></div>
                        <div className="_wrapperFooter"><div className="_aboutTextFooter">Part-time Hu-Lu-Si tutor, and amateur volleyball enthusiast</div></div>
                    </div>

                </div>
                <div className="_imageDiv">
                    <div>
                        <img src={pixelComputer} alt="pixel computer" className="_aboutSectionImage" ></img>
                    </div>
                    <div>
                        <img src={volleyball} alt="pixel volleyball" className="_aboutSectionBall" />
                    </div>
                </div>
                
            </Section>
            <Section className="_expSection" >

                <div className="_expSectionContent">
                    <div className="_expSectionTitle"> Technologies I am most proficient with</div>
                    <div className="_expSectionIcons">
                        <img title="Ruby, Ruby on Rails" className="_expIcon" src={rubyIcon}/> 
                        <img title="C#/.NET" className="_expIcon" src={netIcon} /> 
                        <img title="React" className="_expIcon" src={reactIcon}/>
                        <img title="SQL" className="_expIcon" src={sqlIcon} />
                    </div>
                    <div className="_expSectionIcons">
                        <img title="C++" className="_expIcon" src={cppIcon} />
                        <img title="Java" className="_expIcon" src={javaIcon} />
                        <img title="Python" className="_expIcon" src={pythonIcon} />
                        <img title="NodeJS" className="_expIcon" src={nodeIcon} />
                    </div>
                </div>
            </Section>
            <Section className="_hulusiSectionDiv">
                <div className="_hulusiPicDiv">
                    <img className="_hulusiPic" alt="hulusi" src={hulusi} />
                </div>
                <div className="_hulusiDescDiv">
                    <div className="_hulusiInfo">
                        <div className="_hulusiDescHeader">
                            Hu-Lu-Si tutoring available!
                        </div>
                        <div className="_hulusiDescBody">
                            Due to operational difficulties, I will no longer be offering virtual/remote classes. 
                            However, feel free to reach out if you live within the Madison/Verona WI area, either through the email link below
                            or through my WeChat: Pzjiang4568
                        </div>
                        <div className="_hulusiEmailLink">
                            <a title="email me!" href="mailto:werdwebe@gmail.com"><img className="_hulusiEmailIcon" src={emailIcon} /> </a>
                        </div>
                    </div>
                </div>
            </Section>
            
            <Section className="_projectSection">
                <div id="projects" className="_bottomProject"></div>
                <div className="_projectSquare"></div>
                <div className="_projectSquare"></div>
                <div className="_projectSquare"></div>
                <div className="_projectSquare"></div>
                <div className="_projectSquare"></div>
                <div className="_projectSquare"></div>
                <div className="_projectSquare"></div>
                <div className="_displayProjectDiv">
                    <div className="_displayProjectDivHeader">
                        Project Gallery
                    </div>
                    <div className="_displayProjectDivBody"> 
                        <div className="_expandButton">
                            <Link href="/avalon" className="_expandLink _av">
                                <div className="_expandIcon _avI"></div>
                                <div className="_expandText">Avalon</div>
                            </Link>
                        </div>
                        <div className="_expandButton">
                            <Link href="/purdueZilla" className="_expandLink _zi">
                                <div className="_expandIcon _ziI"></div>
                                <div className="_expandText">PurdueZilla</div>
                            </Link>
                        </div>
                        <div className="_expandButton">
                            <Link href="/purdueHang" className="_expandLink _ha">
                                <div className="_expandIcon _haI"></div>
                                <div className="_expandText">Purdue Hangman</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="_displayProjectDiv">
                    <div className="_displayProjectDivHeader">
                        Embedded Projects
                    </div>
                    <div className="_displayProjectDivBody">
                        <div className="_expandButton">
                            <Link href="/snake" className="_expandLink _zi">
                                <div className="_expandIcon _ziI"></div>
                                <div className="_expandText">Snake IO</div>
                            </Link>
                        </div>
                        <div className="_expandButton">
                            <Link href="/sudoku" className="_expandLink _zi">
                                <div className="_expandIcon _ziI"></div>
                                <div className="_expandText">Sudoku Solver</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>
            
            <Section className="_blogSection">
                <div id="blog" className="_blogCaption">
                    <div className="_blogCaptionTitle">Check out my blog</div>
                    <div className="_blogCaptionBody">I put random thoughts or stories within. Open the book to read more!</div>
                    <Link href="blogs" className=""><img alt="pixel book" src={closedBook} className="_blogSectionImage" ></img></Link>
                </div>
                
            </Section>
           
            
        </div>
        <Footer href="/" />
        </>
    );
}
export default MainPage;