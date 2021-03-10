module.exports = {
  docs: {
    'Overview': ['introduction','documentation-usage','glossary','faqs','changelog'],
    '📚 Reference': [
      'reference/organizations',
      'reference/projects',
      'reference/blueprint-library',
      {
        Admin: [
          'reference/admin/billing',
          'reference/admin/usage-dashboard',
          'reference/admin/user-management',
          'reference/admin/user-permissions',
          {
            Intergrations: [
              'reference/admin/integrations/integrations-overview',
              'reference/admin/integrations/github-integration',
            ]
          },
        ],
        Blueprints: [
          'reference/blueprints/blueprints-overview',
          'reference/blueprints/blueprint-description',
          'reference/blueprints/blueprint-variables',
          'reference/blueprints/blueprint-preview'
        ],
        Vessels: [
          'reference/vessels/vessels-overview',
          'reference/vessels/inputs',
        ],
        Fleets: [
          'reference/fleets/fleets-overview',
          'reference/fleets/visual-editor',
        ],
        Code: [
          'reference/code/code-overview',
          'reference/code/write-code',
          'reference/code/upload-code',
          'reference/code/github-code-sync',
          'reference/code/command',
        ],
        'Requirements': [
          'reference/requirements/environment-variables',
          'reference/requirements/platform-environment-variables',
          'reference/requirements/external-package-dependencies'
        ],
        'Settings': [
          'reference/settings/information',
          'reference/settings/notifications',
          'reference/settings/guardrails',
        ],
        Logs: [
          'reference/logs/logs-overview',
          'reference/logs/fleet-logs',
          'reference/logs/vessel-logs',
        ],
        Triggers: [
          'reference/triggers/triggers-overview',
          'reference/triggers/on-demand-triggers',
          'reference/triggers/schedule-triggers',
          'reference/triggers/webhook-triggers',
        ],
        'Misc Functions': [
          'reference/other-functions/duplication',
          'reference/other-functions/status',
          'reference/other-functions/timestamps-and-timezones',
          'reference/other-functions/url-structures',
          'reference/other-functions/visibility',
        ]
      },
    ],
    '💡 How-Tos': [
      {
        Blueprints: [
          
          'how-tos/blueprints/create-blueprint',
          'how-tos/blueprints/delete-blueprint',
          'how-tos/blueprints/edit-blueprint',
          'how-tos/blueprints/duplicate-blueprint',
          'how-tos/blueprints/search-for-blueprint',
          'how-tos/blueprints/create-blueprint-variables',
          'how-tos/blueprints/reference-blueprint-variables',
          'how-tos/blueprints/reorder-blueprint-variables',
        ],
        Fleets: [
          'how-tos/fleets/create-fleet',
          'how-tos/fleets/delete-fleet',
        ],
        Projects: [
          'how-tos/projects/create-project',
          'how-tos/projects/delete-project',
          'how-tos/projects/edit-project',
        ],
        Triggers: [
          'how-tos/triggers/edit-schedule-trigger',
        ],
        Vessels: [
          'how-tos/vessels/build-vessel-code',
          'how-tos/vessels/build-vessel-blueprint',
          'how-tos/vessels/delete-vessel',
          'how-tos/vessels/edit-vessel',
          'how-tos/vessels/duplicate-vessel',
          'how-tos/vessels/search-for-vessel',
          'how-tos/vessels/assess-vessel-performance',
          'how-tos/vessels/download-code',
        ]
      },
    ],
    '🚀 Tutorials':[
      'tutorials/test-project',
      'tutorials/hello-world-vessel',
      'tutorials/advanced-hello-world-vessel',
      'tutorials/great-expectations-blueprint',
    ],
    '📦 Blueprint Library': [
      'blueprint-library/amazon-athena',
      'blueprint-library/amazon-redshift',
      'blueprint-library/amazon-s3',
      'blueprint-library/azure-blob-storage',
      'blueprint-library/box',
      'blueprint-library/data-manipulation',
      'blueprint-library/dbt',
      'blueprint-library/dropbox',
      'blueprint-library/file-manipulation',
      'blueprint-library/ftp',
      'blueprint-library/google-bigquery',
      'blueprint-library/google-cloud-storage',
      'blueprint-library/google-drive',
      'blueprint-library/google-sheets',
      'blueprint-library/microsoft-sql-server',
      'blueprint-library/mysql',
      'blueprint-library/postgresql',
      'blueprint-library/salesforce',
      'blueprint-library/sftp',
      'blueprint-library/slack',
      'blueprint-library/snowflake',
    ],
    
  },
};