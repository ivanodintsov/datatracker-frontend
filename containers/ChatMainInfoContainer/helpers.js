import * as R from '~/lib/ramda';

export const getTitle = data => R.pathOr('Chat', ['chat', 'title'], data);
