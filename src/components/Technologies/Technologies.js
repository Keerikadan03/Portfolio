import React from 'react';
import { DiAsterisk, DiDatabase, DiFirebase, DiReact, DiTechcrunch, DiUnitySmall, DiZend } from 'react-icons/di';
import { SiSolidity } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
  <SectionDivider />
  <SectionTitle main>Technologies</SectionTitle>
  <SectionText>I've worked with a range of technologies in the developement world. From Front-end to Blockchain.</SectionText>
  <List>
    <ListItem>
      <DiReact size={'3rem'}/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br/> ReactJS
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiDatabase size={'3rem'}/>
      <ListContainer>
        <ListTitle>Blockchain</ListTitle>
        <ListParagraph>
          Experience developing <br/> Dapps
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiUnitySmall size={'3rem'}/>
      <ListContainer>
        <ListTitle>Game Development</ListTitle>
        <ListParagraph>
          Experience with <br/> Unity 
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
</Section>
);

export default Technologies;
