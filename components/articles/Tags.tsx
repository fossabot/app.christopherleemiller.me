import Link from 'next/link';
import React, { SFC } from 'react';
import styled from 'styled-components';
import { TagsType } from './Types';

const TagsWrapper = styled.div`
  font-family: var(--font-monospace);
  font-size: 1.25em;
`;

const TagsLink = styled.span`
  text-transform: uppercase;
`;

const Splitter = styled.div`
  color: var(--main-color);
  padding: 0 5px;
  display: inline-block;
`;

const Tags: SFC<TagsType> = ({ tags }) => (
  <TagsWrapper>
    <span>Tags: </span>
    {tags.map((tag, index) => (
      <TagsLink key={tag.id}>
        {!!index && <Splitter>|</Splitter>}
        <Link href={`/tag?slug=${tag.slug}`} as={`/tag/${tag.slug}`}>
          <a>{tag.title}</a>
        </Link>
      </TagsLink>
    ))}
    {tags.length < 1 && <span>None</span>}
  </TagsWrapper>
);

export { Tags };
