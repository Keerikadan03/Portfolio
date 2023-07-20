import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { VolunteerData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = VolunteerData.length;

const Volunteer = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / VolunteerData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * VolunteerData.length);

      setActiveItem(index);
    }
  }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="timeline">
      {/* <SectionDivider /> */}
      <SectionTitle main>Volunteer Experience</SectionTitle>
      <SectionText>Engaging in diverse volunteer experiences has enriched my skill set, honed responsibility management, and fostered adaptability, contributing significantly to my personal and professional growth.</SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {VolunteerData.map((item, index) =>(
              <CarouselMobileScrollNode key={index} final = {index === TOTAL_CAROUSEL_COUNT - 1}>
                <CarouselItem index={index}
                id={`carousel__item - ${index}`}
                active={activeItem} 
                onClick={(e) => handleClick(e, index)}>
                  <CarouselItemTitle>
                    {item.year}
                  </CarouselItemTitle>
                  <CarouselItemText>{item.text}</CarouselItemText>
                </CarouselItem>
              </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {VolunteerData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type='button'
          >
            <CarouselButtonDot active={activeItem}/>
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Volunteer;
