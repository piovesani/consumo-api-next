import { useRouter } from 'next/router';

const AboutItem = () => {
    const router = useRouter();
    const {slug} = router.query;

    return(
        <div>Página dinâmica de {slug}</div>
    );
}

export default AboutItem;