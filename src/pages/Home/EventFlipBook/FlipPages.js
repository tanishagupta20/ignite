import React, { useEffect, useRef } from "react";
import Hackathon from '../../../assets/eventImgs/hackathon.png';
import CP from '../../../assets/eventImgs/cp.png';
import Esports from '../../../assets/eventImgs/esports.jpg';
import ShortFilmEdit from '../../../assets/eventImgs/shortFilmEditing.png';
import TechTalks from '../../../assets/eventImgs/techTalk.png';
import "./FlipPages.css";

function FlipPages(props) {

    const eventsRef = useRef()
    useEffect(() => {
        props.eventStateSetter(eventsRef)
    }, [eventsRef])

    let currentLocation = 1;
    let numOfPapers = 6;
    let maxLocation = numOfPapers + 1;

    useEffect(() => {
        const prevBtn = document.querySelector("#prev-btn");
        const nextBtn = document.querySelector("#next-btn");
        prevBtn.addEventListener("click", goPrevPage);
        nextBtn.addEventListener("click", goNextPage);
    }, []);

    function openBook() {
        const prevBtn = document.querySelector("#prev-btn");
        const nextBtn = document.querySelector("#next-btn");
        const book = document.querySelector("#book");
        book.style.transform = "translateX(50%)";
        prevBtn.style.transform = "translateX(-180px)";
        nextBtn.style.transform = "translateX(180px)";
    }

    function closeBook(isAtBeginning) {
        const prevBtn = document.querySelector("#prev-btn");
        const nextBtn = document.querySelector("#next-btn");
        const book = document.querySelector("#book");
        if (isAtBeginning) {
            book.style.transform = "translateX(0%)";
        } else {
            book.style.transform = "translateX(100%)";
        }

        prevBtn.style.transform = "translateX(0px)";
        nextBtn.style.transform = "translateX(0px)";
    }

    function goNextPage() {

        const paper1 = document.querySelector("#flipPage1");
        const paper2 = document.querySelector("#flipPage2");
        const paper3 = document.querySelector("#flipPage3");
        const paper4 = document.querySelector("#flipPage4");
        const paper5 = document.querySelector("#flipPage5");
        const paper6 = document.querySelector("#flipPage6");
        if (currentLocation < maxLocation) {
            switch (currentLocation) {
                case 1:
                    openBook();
                    paper1.classList.add("flipped");
                    paper1.style.zIndex = 1;
                    break;
                case 2:
                    paper2.classList.add("flipped");
                    paper2.style.zIndex = 2;
                    break;
                case 3:
                    paper3.classList.add("flipped");
                    paper3.style.zIndex = 3;
                    break;
                case 4:
                    paper4.classList.add("flipped");
                    paper4.style.zIndex = 4;
                    break;
                case 5:
                    paper5.classList.add("flipped");
                    paper5.style.zIndex = 5;
                    break;
                case 6:
                    paper6.classList.add("flipped");
                    paper6.style.zIndex = 6;
                    closeBook(false);
                    break;
                default:
                    throw new Error("unkown state");
            }
            currentLocation++;
        }
    }

    function goPrevPage() {
        const paper1 = document.querySelector("#flipPage1");
        const paper2 = document.querySelector("#flipPage2");
        const paper3 = document.querySelector("#flipPage3");
        const paper4 = document.querySelector("#flipPage4");
        const paper5 = document.querySelector("#flipPage5");
        const paper6 = document.querySelector("#flipPage6");
        if (currentLocation > 1) {
            switch (currentLocation) {
                case 2:
                    closeBook(true);
                    paper1.classList.remove("flipped");
                    paper1.style.zIndex = 6;
                    break;
                case 3:
                    paper2.classList.remove("flipped");
                    paper2.style.zIndex = 5;
                    break;
                case 4:
                    paper3.classList.remove("flipped");
                    paper3.style.zIndex = 4;
                    break;
                case 5:
                    paper4.classList.remove("flipped");
                    paper4.style.zIndex = 3;
                    break;
                case 6:
                    paper5.classList.remove("flipped");
                    paper5.style.zIndex = 2;
                    break;
                case 7:
                    openBook();
                    paper6.classList.remove("flipped");
                    paper6.style.zIndex = 1;
                    break;
                default:
                    throw new Error("unkown state");
            }

            currentLocation--;
        }
    }


    return (

        <div className="book-container" id="events" ref={eventsRef} >

            {/*  Previous Button  */}
            <button id="prev-btn" className="flip-btn">
                <i className="bi bi-arrow-left-circle-fill"></i>
            </button>


            {/*  Book  */}
            <div id="book" className="book">

                {/*  Paper 1  */}
                <div id="flipPage1" className="paper">
                    <div className="front">
                        <div className="front-content">
                            <h1 style={{ marginTop: 0 }}>Exciting Events</h1>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            {/* hackathon image */}
                            <img src={Hackathon} alt='students participating in a hackathon' />
                        </div>
                    </div>
                </div>

                {/*  Paper 2  */}
                <div id="flipPage2" className="paper">
                    <div className="front">
                        <div className="front-content">
                            {/* hackathon desc */}
                            <h1>24hr Hackathon</h1>
                            <p>A 24 hour hackathon to kickstart the fest and 'ignite' the spark of innovation among the participants.
                                Cash prizes would be awarded to winning teams. Overall, participants would have an elaborate learning experience.</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            {/* CP image */}
                            <img src={CP} alt='students participating in a competitive programming event' />
                        </div>
                    </div>
                </div>

                {/*  Paper 3  */}
                <div id="flipPage3" className="paper">
                    <div className="front">
                        <div className="front-content">
                            {/* CP desc */}
                            <h1>Competitive Programming</h1>
                            <p>To bring the core coding skills to test, a competitive programming event for all the coding enthusiasts. With attractive prizes for the winners, this event will enable participants to flaunt their DSA skills. </p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            {/* E-Sports image */}
                            <img src={Esports} alt='an esports event in progess' />
                        </div>
                    </div>
                </div>

                {/*  Paper 4  */}
                <div id="flipPage4" className="paper">
                    <div className="front">
                        <div className="front-content">
                            {/* E-Sports desc */}
                            <h1>E-Sports</h1>
                            <p>Because no great fest lacks the fun element, various eSports events would help 'ignite' the spirit of team playing and leadership within the participants.</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            {/* Short Film Editing image */}
                            <img src={ShortFilmEdit} alt='video editing' />
                        </div>
                    </div>
                </div>

                {/*  Paper 5  */}
                <div id="flipPage5" className="paper">
                    <div className="front">
                        <div className="front-content">
                            {/* Short Film Editing desc */}
                            <h1>Short Film Editing</h1>
                            <p><i>Script, Shoot, Edit!</i><br />
                                A short-film making competition for the participants to showcase their acting, communicating, directing and editing skills.
                                This competition demands excessive collaboration and team spirit among the participating teams.</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            {/* Tech Talks image */}
                            <img src={TechTalks} alt='a person delivering a talk' />
                        </div>
                    </div>
                </div>

                {/*  Paper 6  */}
                <div id="flipPage6" className="paper">
                    <div className="front">
                        <div className="front-content">
                            {/* Tech Talks desc */}
                            <h1>Tech Talks</h1>
                            <p>Interested faculty and students to deliver workshops on targeted topics and skills (e.g. GitHub, Wordpress etc.) to get newbie students started on their journey towards a building a successful career.</p>
                        </div>
                    </div>
                    <div className="back">
                        <div className="back-content">
                            <h2>We'll see you there!</h2>
                        </div>
                    </div>
                </div>

            </div>

            {/*  Next Button  */}
            <button id="next-btn" className="flip-btn" >
                <i className="bi bi-arrow-right-circle-fill"></i>
            </button>
        </div>
    );
}

export default FlipPages;