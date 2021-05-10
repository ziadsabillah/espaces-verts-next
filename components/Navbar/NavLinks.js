import styled from "styled-components"
import { useRouter } from 'next/router'
import React from "react";


const NavLinkContainer = styled.div`
    display: flex; 
    align-items: center;
    align-self: center;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;    
    list-style: none;
`;

const LinkItem = styled.li`
    padding: .5em 1.1em;
    border-radius: 2px 2px 2px 2px;
    color: #FFFFFF;
    margin: 0 .2em;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    display: flex;
    transition: all 220ms ease-in-out; 

    &:hover {
        background: #FFFFFF;
        color: #000;
    }

    &.active {
        background: #FFFFFF;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    font-size: inherit;
`;

const DetectActive = ({href, pageName}) => {
    const router = useRouter();
    let className = '';

    if(router.pathname === href || (router.pathname.includes(href) && href !== '/')) {
        className = `active`
    }

    return  <LinkItem className={className}><Link href={href}>{pageName}</Link></LinkItem>

}

const NavLinks = () => {
    const router = useRouter();


    return (
        <NavLinkContainer>
            <LinksWrapper>
                <DetectActive href="/" pageName="Accueil" />
                
                <DetectActive href="/about" pageName="A propos" />

                <DetectActive href="/projects" pageName="Projets" />

                <DetectActive href="/services" pageName="Services" />

                <DetectActive href="/pricing" pageName="Pricing" />

                <DetectActive href="/contact" pageName="Contact" />

            </LinksWrapper>
        </NavLinkContainer>
    )
}

export default NavLinks;