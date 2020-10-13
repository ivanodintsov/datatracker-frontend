import * as R from '~/lib/ramda';
import { getFullName } from '~/utils/selectors';

export const getTitle = (data) => {
  const fullName = getFullName(R.pathOr({}, ['chatMember', 'user'], data)) || 'Chat';
  const chatTitle = R.pathOr('member', ['chatMember', 'chat', 'title'], data);

  return `${fullName.fullName} | ${chatTitle}`;
};
