module.exports = ({ env }) => ({
    'site-publisher': {
      config: {
        owner: 'dagulv', // The Github organisation or user
        repo: 'strapi-test', // The name of the repository
        workflow_id: 'deploy.yml', // The workflow_id or filename
        token: env('GITHUB_TOKEN'), // The GitHub personal access token with access to trigger workflows and view build status
        branch: 'main', // The branch the workflow should be triggered on
      }
    }
  });