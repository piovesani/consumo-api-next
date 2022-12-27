import { ReactElement } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";
import Navbar from "../Navbar";
import styles from './Layout.module.css';

type Props = {
    children: ReactElement
}

function Layout({ children }: Props) {
    return (
        <div className={styles.container}>
            <Header />
            <Navbar />
            <Main body={children} />
            <Footer />
        </div>
    );
}

export default Layout;
