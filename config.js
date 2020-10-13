import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { NODE_ENV } = publicRuntimeConfig;

export const prod = NODE_ENV === 'production';

export const graphqlConfig = {
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URI,
  // uri: 'http://192.168.1.197:3030/client',
};

export const reactEmojione = {
  backgroundImage: 'url("https://i.imgur.com/QYnuAXy.png")',
};

export const ga = {
  tag: 'UA-71585569-2',
};

export const addBotUrl = process.env.NEXT_PUBLIC_ADD_BOT_URL;

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default {
  graphqlConfig,
  reactEmojione,
};
