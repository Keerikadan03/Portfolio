import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there,<br/>
        I'm Fense.
      </SectionTitle>
      <SectionText>
      

      I am a student developer focused on<br/> front-end development. Proficient in <strong>TypeScript, NextJS, and Solidity </strong>for smart contract development. Eager to explore blockchain technology and contribute to open source.
      </SectionText>
      <a href='https://linktr.ee/fenseraju' target=' '>
        <Button>
            Learn More
        </Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;