import {  ScrollArea,  AppShell } from '@mantine/core';
import {
    IconGenderDemigirl,
    IconPhysotherapist,
    IconHeartBolt,
    IconFileAnalytics,
    IconPointerCheck,
    IconAdjustments,
    IconChartInfographic,
} from '@tabler/icons-react';


import classes from "../components/infoPeople/DoubleNavbar.module.css";
import { UserButton } from "../components/infoPeople/UserButton";
import { LinksGroup } from "../components/infoPeople/NavbarLinksGroup";
import { Outlet } from 'react-router-dom';

const mockdata = [
    { label: 'Informacion Hormonal para Mujeres', icon: IconHeartBolt },
    {
        label: 'Hormonas biodenticas',
        icon: IconGenderDemigirl,

        links: [
            { label: 'Estrogeno', link: '/' },
            { label: 'Progesterona', link: '/' },
            { label: 'Testosterona', link: '/' },
            { label: 'Cortisol', link: '/' },
            { label: 'Dhea', link: '/' },
            { label: 'Hormona de crecimiento', link: '/' }

        ],
    },
    {
        label: 'Menopausia',
        icon: IconPhysotherapist,
        links: [
            { label: 'Tratamientos', link: '/' },
            { label: 'Premenopausia', link: '/' },
            { label: 'Posmenopausia', link: '/' },
            { label: 'Histerectomia', link: '/' }
        ],
    },
    {
        label: 'Sintomas Menoupauticos',
        icon: IconPointerCheck,
        links: [
            { label: 'Sudores Nocturnos', link: '/' },
            { label: 'Sequedad Vaginal', link: '/' },
            { label: 'Aumento de peso', link: '/' },
            { label: 'Sensacion de Sofoco', link: '/' },
            { label: 'Cambios de Humores (Biporalidad)', link: '/' },
            { label: 'Bajo deseo sexual', link: '/' },
            { label: 'Sensacion de Fatiga', link: '/' },
            { label: 'Perdida prograsiva de Cabello', link: '/' },
            { label: 'Sensacion de Depresion', link: '/' },
            { label: 'Premenopausia', link: '/' },
            { label: 'Posmenopausia', link: '/' },
            { label: 'Histerectomia', link: '/' }
        ],
    },
    { label: 'Niveles de Tiroides', icon: IconChartInfographic },
    { label: 'Hipoglisemia', icon: IconFileAnalytics },
    { label: 'Diabetes', icon: IconAdjustments },
    {
        label: 'Para mas informacion',
        icon: IconChartInfographic,
        links: [
            { label: 'Enable 2FA', link: '/' },
            { label: 'Change password', link: '/' },
            { label: 'Recovery codes', link: '/' },
        ],
    },
];

export function InfoForWomens() {
    const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

    return (
        <AppShell styles={{navbar:{marginTop:'4rem'}}}  navbar={{width:300,breakpoint:'sm' }} >


            <AppShell.Navbar>


            <nav className={classes.navbar}>
           
                <ScrollArea className={classes.links}>
                    <div className={classes.linksInner}>{links}</div>
                </ScrollArea>

                <div className={classes.footer}>
                    <UserButton />
                </div>
            </nav>

            </AppShell.Navbar>
            <AppShell.Main>
            <Outlet />
            </AppShell.Main>

      

        </AppShell>

    );
}

export default InfoForWomens;