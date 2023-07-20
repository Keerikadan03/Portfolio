import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { Div3 } from '../Header/HeaderStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Ring me on</LinkTitle>
          <LinkItem href='tel:+919995405169'>+91 999-5405-169</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email me at</LinkTitle>
          <LinkItem href='mailto:fenserajuofficial@gmail.com'>fenserajuofficial@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Commited to achieving my goals</Slogan>
          </CompanyContainer>
        <SocialContainer>
      <SocialIcons href='https://github.com/Keerikadan03'>
        <AiFillGithub size={"3rem"}/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/fenseraju/'>
        <AiFillLinkedin size={"3rem"}/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com/_fense_'>
        <AiFillInstagram size={"3rem"}/>
      </SocialIcons>
        </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
