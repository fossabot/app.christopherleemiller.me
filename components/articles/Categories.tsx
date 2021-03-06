import Link from 'next/link';
import React, { SFC } from 'react';
import styled from 'styled-components';
import { CategoriesType } from './Types';

const CategoriesWrapper = styled.span`
  font-family: var(--font-monospace);
  font-size: 1.25em;
`;
const CategoriesLink = styled.span`
  text-transform: uppercase;
`;

const Splitter = styled.div`
  color: var(--main-color);
  padding: 0 5px;
  display: inline-block;
`;

const Categories: SFC<CategoriesType> = ({ categories }) => (
  <CategoriesWrapper>
    <span>Categories: </span>
    {categories.map((category, index) => (
      <CategoriesLink key={category.id}>
        {!!index && <Splitter>|</Splitter>}
        <Link
          href={`/articles?category=${category.slug}`}
          as={`/articles?category=${category.slug}`}
        >
          <a>{category.title}</a>
        </Link>
      </CategoriesLink>
    ))}
    {categories.length < 1 && <span>Uncategorized</span>}
  </CategoriesWrapper>
);

export { Categories };
