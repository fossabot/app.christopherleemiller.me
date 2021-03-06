import React, { SFC } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const CardPopTransition = posed.div({
  enter: {
    opacity: `1`,
  },
  exit: {
    opacity: `0`,
  },
});

const StyledCard = styled(CardPopTransition)`
  color: black;
  font-family: var(--font-family);
  font-weight: 300;
  max-width: 1000px;
  margin: 0 auto;
`;

const CardHeading = styled.div`
  background: var(--main-color);
  padding: 20px;
  color: var(--text-color-light);
  font-family: var(--font-family);
  text-align: center;
`;

const CardHeadingHeading = styled.h2`
  margin: 0;
  font-size: 2.5em;
  font-weight: 300;
`;
const CardHeadingSubHeading = styled.h3`
  margin: 0;
  font-size: 1em;
  font-weight: 300;
`;

const CardBody = styled.div`
  background: var(--background-light);
  padding: 40px;
  font-size: 1.25em;
  letter-spacing: 1px;
  text-align: center;

  a {
    color: var(--main-color);

    :hover {
      text-decoration: underline;
    }
  }
`;

interface CardProps {
  children: object;
  heading?: string;
  subHeading?: string;
  dark?: boolean;
}

const Card: SFC<CardProps> = ({ heading, subHeading, dark, children }) => (
  <StyledCard initialPose="exit" pose="enter">
    {(heading || subHeading) && (
      <CardHeading>
        {heading && <CardHeadingHeading>{heading}</CardHeadingHeading>}
        {subHeading && (
          <CardHeadingSubHeading>{subHeading}</CardHeadingSubHeading>
        )}
      </CardHeading>
    )}

    <CardBody>{children}</CardBody>
  </StyledCard>
);

export default Card;
