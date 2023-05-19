import { Header as DSFRHeader } from '@codegouvfr/react-dsfr/Header';

function Header() {
    return (
        <DSFRHeader
            brandTop={
                <>
                    AMÉLIORER MON
                    <br />
                    PRODUIT
                </>
            }
            homeLinkProps={{
                href: '/',
                title: 'Accueil',
            }}
        />
    );
}

export { Header };
