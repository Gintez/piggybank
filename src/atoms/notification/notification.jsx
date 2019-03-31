import React from 'react';
import Alert from 'react-bootstrap/Alert';
import styled from 'styled-components';

const NotificationContent = styled.div`
  min-width: 100px;
`;

class Notification extends React.Component {
  constructor (props) {
    super(props);

    this.state = { show: true };
    this.handleHide = this.handleHide.bind(this);
  }

  componentDidMount () {
    setTimeout(this.handleHide, 5000);
  }

  handleHide () {
    this.setState({ show: false });
  }

  render () {
    const { title, text, type } = this.props;

    return (
      <Alert dismissible variant={type} show={this.state.show}>
        <NotificationContent>
          <Alert.Heading>
            {title}
          </Alert.Heading>
          <p>{text}</p>
        </NotificationContent>
      </Alert>
    );
  }
}

export default Notification;
