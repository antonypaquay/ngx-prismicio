export const environment = {
  production: true,
  prismic: {
    repositoryNameOrEndpoint: process.env.NG_APP_PRISMIC_REPOSITORY_NAME,
    accessToken: process.env.NG_APP_PRISMIC_ACCESS_TOKEN,
  }
};
