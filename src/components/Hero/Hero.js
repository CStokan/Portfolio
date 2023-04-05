import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        I'm Cooper Stokan <br />Welcome To 
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        This is my portfolio to display the skills I have aquired throughout my past 3 years of programming.
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;