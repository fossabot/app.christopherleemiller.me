import useOnlineStatus from '@rehooks/online-status';
import React, { SFC } from 'react';
import Router from 'next/router';
import { Query } from 'react-apollo';
import { withLayout } from '../components/layout/Layout';
import { MODELS_QUERY } from '../utils/query';
import Card from '../components/Card';
import { Model } from '../components/models/Model';
import { Main } from '../styles/Themes';

const title = `Models`;
const description = `Whether it plane, car or tank, its all here!`;

interface ModelPageTypes {
  query: {
    slug: string;
  };
}

const ModelPage: SFC<ModelPageTypes> = ({ query }) => {
  const onlineStatus = useOnlineStatus();

  return (
    <Main>
      {onlineStatus && (
        <Query
          query={MODELS_QUERY}
          variables={{ model_slug: query.slug }}
          notifyOnNetworkStatusChange
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) {
              console.log(error.message);
              return (
                <Card>
                  <h3>Unable to fetch data</h3>
                  <p>{error.message}</p>
                </Card>
              );
            }

            console.log(onlineStatus);

            // verify that we actually received an model, an empty array signifies no result.
            if (data.models && data.models.length > 0) {
              const model = data.models[0];
              return <Model model={model} />;
            }

            // default to redirect to articles page
            Router.push(`/models`);
            return null;
          }}
        </Query>
      )}

      {!onlineStatus && (
        <Card heading="Internet Offline">
          <p>Unable to connect to the internet. Please try again</p>
        </Card>
      )}
    </Main>
  );
};
export default withLayout(ModelPage, title, description);
