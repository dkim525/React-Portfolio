import { Projects } from '../Projects/Projects';
import { AboutMe } from '../AboutMe/AboutMe';
import { Resume } from '../Resume/Resume';
import { Contact } from '../Contact/Contact';
import { Research} from '../Research/Research';
import './Header.css'

export function Header(props) {


    return (
    
        <header class="header">
            <h1>Davis Kim</h1>
            <nav>
                <ul>
                    <li><button href='#' onClick={() => props.setPage(<AboutMe />)}>About Me</button></li>
                    <li><button href='#' onClick={() => props.setPage(<Projects />)}>Projects</button></li>
                    <li><button href='#' onClick={() => props.setPage(<Contact setPage={props.setPage}/>)}>Contact</button></li>
                    <li><button href='#' onClick={() => props.setPage(<Resume />)}>Resume</button></li>
                    <li><button href='#' onClick={() => props.setPage(<Research />)}>Research</button></li>
                </ul>
            </nav>
        </header>
    )
}