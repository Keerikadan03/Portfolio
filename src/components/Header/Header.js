import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, Img, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href={"/"}>
        <a href="" style={{display:'flex',alignItems:'center', color:'white', marginBottom:'20px'}}>
          {/* <DiCssdeck size={'3rem'}/> */}
          <img src="/images/avatar.png" alt="" width={'40em'} style={{padding: '2px', borderRadius: '50%'}}/>
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <Link href={"#projects"}>
        <NavLink>Projects</NavLink>
      </Link>
      <Link href={"#tech"}>
        <NavLink>Tech</NavLink>
      </Link>
      <Link href={"#experience"}>
        <NavLink>Experience</NavLink>
      </Link>
      <Link href={"#acheivements"}>
        <NavLink>Acheivements</NavLink>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/Keerikadan03'>
        <AiFillGithub size={"3rem"}/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/fenseraju/'>
        <AiFillLinkedin size={"3rem"}/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com/_fense_'>
        <AiFillInstagram size={"3rem"}/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
