import Home from "../../../component/home";
import NavbarClient from "../../../component/navbarClient";
import Footer from "../../../component/footer";
function ClientHome() {
    return (
        <div>
            <NavbarClient />
            <Home />
            <Footer />
        </div>

    );
}
export default ClientHome;