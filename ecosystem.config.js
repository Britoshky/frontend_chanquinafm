module.exports = {
  apps: [
    {
      name: 'frontend-chanquinafm',
      cwd: '/var/www/clients/client0/web1/web/frontend_chanquinafm',
      script: 'npm',
      args: 'run start',
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        NEXT_DISABLE_ACTIONS_HOST_VALIDATION: 'true'
      },
      pre_start: 'npm run build'
    }
  ]
};
