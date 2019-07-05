import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import moment from 'moment-timezone';
import css from './AddBotButton.sass';
import { addBotUrl } from '../../../config';

const ADD_BTN_KEY = 'addBotBtn';
const SHOW_TIME = 24;

class AddBotButton extends Component {
  state = {
    isVisible: false,
  };

  constructor(props) {
    super(props);

    this.onCloseClick = this.onCloseClick.bind(this);
  }

  componentDidMount() {
    this.check();
  }

  onCloseClick() {
    localStorage.setItem(ADD_BTN_KEY, new Date().getTime());
    this.setState({ isVisible: false });
  }

  check() {
    const time = localStorage.getItem(ADD_BTN_KEY);

    if (!time || moment.unix(time / 1000).diff(moment(), 'hours') < -SHOW_TIME) {
      this.setState({ isVisible: true });
    }
  }

  render() {
    const { isVisible } = this.state;

    return isVisible && (
      <Button.Group className={css.root}>
        <Button color='blue' as='a' href={addBotUrl} target='__blank'>Add bot</Button>
        <Button color='blue' icon onClick={this.onCloseClick}>
          <Icon name='close' />
        </Button>
      </Button.Group>
    );
  }
}

export default AddBotButton;
