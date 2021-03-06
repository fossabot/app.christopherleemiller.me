interface TagType {
  id: string;
  slug: string;
  title: string;
}

interface TagsType {
  tags: Array<TagType>;
}

interface CommentType {
  id: string;
  user: {
    username: string;
  };
}

interface CommentsType {
  comments: Array<CommentType>;
}

interface ModelTypes {
  model: {
    id: string;
    created_at: string;
    updated_at: string;
    title: string;
    slug: string;
    featured_image: {
      public_id: string;
    };
    content: string;
    review: String;
    seo_title: string;
    seo_description: string;
    completed: Boolean;
    kit_number: string;
    year_released: number;
    scale: {
      scale: string;
      slug: string;
    };
    manufacturer: {
      company: string;
      slug: string;
    };
    tags: Array<TagType>;
    comments: Array<CommentType>;
    clockify_id: string;
    scalemates_link: string;
  };
}

export { ModelTypes, TagType, TagsType, CommentType, CommentsType };
