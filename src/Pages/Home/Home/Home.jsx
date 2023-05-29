import { useContext } from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import { AuthContext } from "../../../provider/AuthProvider";

const Home = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;