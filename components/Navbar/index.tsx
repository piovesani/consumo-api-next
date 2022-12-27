import Link from 'next/link';
import { useRouter } from 'next/router';
import { navegationLinks } from '../../utils/data';
import styles from './Navbar.module.css'

const Navbar = () => {

    const router = useRouter();

    const verifyActiveLink = (loopPath: string) => {
        if(loopPath === '/' && router.pathname !== '/'){
            return null;
        }
        
        if(router.pathname.indexOf(loopPath) === 0){
            return styles.linkActive;
        }
        return null;
    }

    return(
        <ul className={styles.container}>
            {navegationLinks.map((link, index) =>(
                <li key={index} className={[
                    styles.linkItem,
                    verifyActiveLink(link.path)
                    ].join(' ')}>
                    <Link href={link.path}>{link.label}</Link>
                </li>
            ))}
        </ul>
    );
}

export default Navbar;