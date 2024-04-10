
import Never from './../Components/Nevber/Nevber';
import { Outlet } from "react-router-dom";
import Footer from './../Components/Footer/Footer'
const Root = () => {
    return (
        <div  >
            <Never></Never>
            <Outlet/>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;