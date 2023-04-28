import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import HeaderAdmin from "../../components/HeaderAdmin";

export default function Course() {

    return (
        <>
            <HeaderAdmin />
            <Outlet />
            <Footer />
        </>
    )
}
