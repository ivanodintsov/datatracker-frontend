import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from '~/lib/ramda';
import Typography from 'antd/es/typography';
import { Title } from '../../Title';
import { withLoading } from '../../Loading';

const { Text } = Typography;

export class ChatInfo extends Component {
  static propTypes = {
    data: PropTypes.shape({}),
  };

  static defaultProps = {
    data: undefined,
  }

  render() {
    const chat = R.pathOr({}, ['chat'], this.props);
    const src = R.path(['photo', 'small_file'], chat);
    const title = R.propOr('', 'title', chat);
    const description = R.propOr(false, 'description', chat);

    return (
      <>
        <Title title={title} src={src} />
        {description && (
          <Text>{description}</Text>
        )}
      </>
    );
  }
}

export default withLoading({}, ChatInfo);
