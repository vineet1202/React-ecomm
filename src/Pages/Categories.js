import CategoriesHeader from "../Components/CategoriesHeader.js"
import { Outlet } from "react-router-dom"

function Categories(){
    return (
        <div>
            <CategoriesHeader/>
            <Outlet/>
        </div>
    )
}

export default Categories
