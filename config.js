import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { NODE_ENV } = publicRuntimeConfig;

export const prod = NODE_ENV === 'production';

export const graphqlConfig = {
  // uri: 'https://api.datatracker.site/client',
  uri: 'http://192.168.1.197:3030/client',
};

export const reactEmojione = {
  backgroundImage: 'url("https://i.imgur.com/QYnuAXy.png")',
};

export const ga = {
  tag: 'UA-71585569-2',
};

export const addBotUrl = 'https://telegram.me/datatracker_bot?start=true';

export const baseUrl = prod ? 'https://beta.datatracker.site' : 'http://192.168.1.197:3000';

export default {
  graphqlConfig,
  reactEmojione,
};
