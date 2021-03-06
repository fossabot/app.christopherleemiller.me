import React, { SFC } from 'react';
import styled from 'styled-components';
import Disqus from 'disqus-react';
import { DISQUS_SHORTNAME } from '../config';

const ItemComments = styled.div`
  background: var(--background-darker);
  padding: 40px;
`;

interface CommentType {
  item: {
    slug: string;
    title: string;
    id: string;
  };
  slug: string;
}

const CommentThread: SFC<CommentType> = ({ item, slug }) => {
  const disqusConfig = {
    url: `${process.env.SITE_URL}/${slug}/${item.slug}`,
    identifier: `${item.slug}+${item.id}`,
    title: item.title,
  };
  return (
    <ItemComments>
      <Disqus.DiscussionEmbed
        shortname={DISQUS_SHORTNAME}
        config={disqusConfig}
      />
    </ItemComments>
  );
};
export { CommentThread };
