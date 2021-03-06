import { formatRelative, parseISO } from 'date-fns';
import { SFC } from 'react';
import styled from 'styled-components';
import { ArticleTypes } from '../Types';
import { FeaturedImage } from '../../FeaturedImage';

const StyledArticleHeader = styled.div`
  font-family: var(--font-family);
  font-weight: 100;
`;

const StyledArticleHeaderInfo = styled.div`
  background: var(--main-color);
  padding: 20px 40px;
  margin: 0;
  color: var(--text-color-light);
`;

const StyledHeading = styled.h2`
  font-size: 2em;
  margin: 5px 0;
  font-weight: 200;
`;

const StyledPublishDate = styled.p`
  margin: 0;
`;

const ArticleHead: SFC<ArticleTypes> = ({ article }) => (
  <StyledArticleHeader>
    {article.featured_image && (
      <FeaturedImage
        image={article.featured_image}
        width={1000}
        alt={article.title}
        border
        max_height={300}
      />
    )}
    <StyledArticleHeaderInfo>
      <StyledPublishDate>
        Published: {formatRelative(parseISO(article.created_at), new Date())}
      </StyledPublishDate>
      <StyledHeading>{article.title}</StyledHeading>
    </StyledArticleHeaderInfo>
  </StyledArticleHeader>
);

export { ArticleHead };
