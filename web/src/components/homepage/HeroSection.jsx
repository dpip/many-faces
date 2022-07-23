import React from 'react';
import Link from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/paragraphText';

import Button from '../buttons/Button';

export default function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">Many Faces Initiative</h1>
            <ParagraphText className="hero__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              earum itaque voluptates. Aliquid, aperiam nobis. Minima modi dolor
              deserunt. Ad accusantium soluta, illum molestias quas voluptate.
              Ipsum consequatur veniam excepturi!
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Explore
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/vr-guy.jpg"
              alt="vr guy"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}
