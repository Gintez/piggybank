import { pathOr } from 'ramda';

import { NAME } from './notifications-constants';

export const getNotifications = pathOr([], [NAME, 'notifications']);
