import { useState } from "react";
import "../../../../src/App.css";
import SubCategory1 from "./SubCategory1";
import SubCategory2 from "./SubCategory2";
import SubCategory3 from "./SubCategory3";


const Category = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className="container">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Teddy Bear
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Horse
                </button>
                <button
                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}
                >
                    dinosaur
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                   <SubCategory1></SubCategory1>
                </div>

                <div
                    className={toggleState === 2 ? "content  active-content" : "content"}
                >
                    <SubCategory2></SubCategory2>
                </div>

                <div
                    className={toggleState === 3 ? "content  active-content" : "content"}
                >
                    <SubCategory3></SubCategory3>
                </div>
            </div>
        </div>
    );
};

export default Category;