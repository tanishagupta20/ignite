import React, { useEffect } from "react";
import "./FlipPages.css";

function FlipPages() {

    let currentLocation = 1;
    let numOfPapers = 3;
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
        if (currentLocation > 1) {
            switch (currentLocation) {
                case 2:
                    closeBook(true);
                    paper1.classList.remove("flipped");
                    paper1.style.zIndex = 3;
                    break;
                case 3:
                    paper2.classList.remove("flipped");
                    paper2.style.zIndex = 2;
                    break;
                case 4:
                    openBook();
                    paper3.classList.remove("flipped");
                    paper3.style.zIndex = 1;
                    break;
                default:
                    throw new Error("unkown state");
            }

            currentLocation--;
        }
    }


    return (
        <div className="book-container">
            {/*  Previous Button  */}
            <button id="prev-btn" className="flip-btn">
                <i class="bi bi-arrow-left-circle-fill"></i>
            </button>


            {/*  Book  */}
            <div id="book" className="book">
                {/*  Paper 1  */}
                <div id="flipPage1" className="paper">
                    <div className="front">
                        <div id="f1" className="front-content">
                            <h1>Events</h1>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b1" className="back-content">
                            {/* hackathon image */}
                            <img/>
                        </div>
                    </div>
                </div>
                {/*  Paper 2  */}
                <div id="flipPage2" className="paper">
                    <div className="front">
                        <div id="f2" className="front-content">
                            {/* hackathon desc */}
                            <h1>24hr Hackathon</h1>
                            <p>~~~~~~~~~~~~~~~~~~~~~~~~ Description~~~~~~~~~</p>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b2" className="back-content">
                            {/* CP image */}
                            <img/>
                        </div>
                    </div>
                </div>
                {/*  Paper 3  */}
                <div id="flipPage3" className="paper">
                    <div className="front">
                        <div id="f3" className="front-content">
                            {/* CP desc */}
                            <h1>Competitive Programming</h1>
                            <p>~~~~~~~~~~~~~~~~~~~~~~~~ Description~~~~~~~~~</p>
                        </div>
                    </div>
                    <div className="back">
                        <div id="b3" className="back-content">
                            <h1>Back 3</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Next Button  */}
            <button id="next-btn" className="flip-btn" >
                <i class="bi bi-arrow-right-circle-fill"></i>
            </button>
        </div>
    );
}

export default FlipPages;