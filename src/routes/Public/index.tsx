import { Outlet } from "react-router-dom";
import HeaderPublic from "../../components/HeaderPublic";

export default function Public() {

    return (
        <>
            <HeaderPublic />
            <Outlet />
        </>
    )
}
