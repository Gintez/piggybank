import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Notification from 'atoms/notification';
import { getNotifications } from 'api/notifications/notifications-selectors';
import { ERROR_NOTIFICATION, SUCCESS_NOTIFICATION } from 'api/notifications/notifications-constants';

const StyledNotifications = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Notifications = ({ notifications }) => (
  <StyledNotifications>
    {notifications.map(({ type, text, title, id, ...rest }) => {
      switch (type) {
        case ERROR_NOTIFICATION:
          return (
            <Notification
              key={id}
              id={id}
              type='danger'
              text={text || 'Something went wrong'}
              title={title || 'Opss'}
              {...rest}
            />);
        case SUCCESS_NOTIFICATION:
          return (
            <Notification
              key={id}
              id={id}
              type='success'
              text={text}
              title={title || 'Success'}
              {...rest}
            />);
        default:
          return (
            <Notification
              key={id}
              id={id}
              type='info'
              text={text}
              title={title || 'Attention'}
              {...rest}
            />);
      }
    })}
  </StyledNotifications>
);

export default connect(
  state => ({
    notifications: getNotifications(state)
  })
)(Notifications);
