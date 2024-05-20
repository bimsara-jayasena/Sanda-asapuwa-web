import { Link } from "react-router-dom";

export default function Nav(){
    return(<nav>
        <ul>
            <li>Home</li>
            <li><Link to='/Services'>Services</Link></li>
        </ul>
    </nav>)
}