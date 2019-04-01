import styled from 'styled-components';

const StyledArticle = styled.div`
  background: ${props => props.theme.grey};
  color: black;
  font-family: 'Special Elite', sans-serif;
  max-width: ${props => props.theme.max_width};
  margin: 50px auto;
`;

const StyledArticleBody = styled.div`
  padding: 40px;
  font-size: 1.25em;
  letter-spacing: 1px;

  ol {
    list-style-type: decimal;
    padding-left: 25px;
    list-style-position: inside;
    margin-bottom: 15px;
  }
  ul {
    list-style-type: circle;
    padding-left: 25px;
    list-style-position: inside;
    margin-bottom: 15px;
  }
  p {
    margin: 15px auto;
    letter-spacing: 1px;
  }
  a {
    color: ${props => props.theme.red};
    text-decoration: underline;
  }
  h1 {
    font-size: 1.5em;
    margin: 10px 0;
    font-weight: bolder;
  }
  h2 {
    font-size: 1.4em;
    margin: 10px 0;
    font-weight: bolder;
  }
  h3 {
    font-size: 1.3em;
    margin: 10px 0;
    font-weight: bolder;
  }
  h4 {
    font-size: 1.25em;
    margin: 10px 0;
    font-weight: bolder;
  }
  h5 {
    font-size: 1.15em;
    margin: 10px 0;
    font-weight: bolder;
  }
  h6 {
    font-size: 1.1em;
    margin: 10px 0;
    font-weight: bolder;
  }
  strong {
    font-weight: bold;
    text-decoration: underline;
  }
  em {
    font-style: italic;
  }
  pre {
    border: 5px solid ${props => props.theme.red};
  }
`;

const StyledArticleHeader = styled.div`
  h2 {
    font-size: 1.75em;
    letter-spacing: 3px;
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

const StyledArticleHeaderImage = styled.img`
  object-fit: fill;
  display: block;
  width: 100%;
  border: 3px solid ${props => props.theme.white};
`;

const StyledArticleHeaderInfo = styled.div`
  background: ${props => props.theme.red};
  padding: 20px;
  margin: 0;
  color: ${props => props.theme.grey};
`;

const StyledArticleFooter = styled.div`
  background: ${props => props.theme.grey_darker};
  padding: 20px;
  margin: 0;

  span,
  a {
    font-size: 1.15em;
    font-family: monospace;
  }

  a {
    text-transform: uppercase;
    text-decoration: underline;
  }
  a:after {
    content: ', ';
    color: ${props => props.theme.black};
    text-decoration: none;
  }
  a:last-of-type:after {
    content: '';
  }
`;

const StyledReadMore = styled.p`
  background: ${props => props.theme.red};
  padding: 5px;
  transform: skew(-20deg);
  text-align: center;
  max-width: 200px;

  a {
    color: ${props => props.theme.white};
  }
`;
export {
  StyledArticle,
  StyledArticleBody,
  StyledArticleHeader,
  StyledArticleHeaderImage,
  StyledArticleHeaderInfo,
  StyledArticleFooter,
  StyledReadMore,
};
