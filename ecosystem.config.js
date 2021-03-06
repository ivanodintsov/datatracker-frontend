module.exports = {
  apps: [
    {
      name: 'myapp',
      script: './server.js',
      watch: true,
      instances: '1',
      exec_mode: 'cluster',
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
    },
  ],
};
