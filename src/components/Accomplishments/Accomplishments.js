import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, CarouselItemText } from './AccomplishmentsStyles';
import { AccomplishmentsData } from '../../constants/constants';

const Accomplishments = () => (
  <Section id='acheivements'>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {
        AccomplishmentsData.map((card, index) => (
          <a href={card.link} target=' '>
            <Box key= {index}>
              <BoxNum>{card.year}</BoxNum>
              <CarouselItemText>{card.text}</CarouselItemText>
            </Box>
          </a>
        ))
      }
    </Boxes>
  </Section>
);

export default Accomplishments;
