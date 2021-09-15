module.exports = {
	docs: {
		Overview: [
			"introduction",
			"documentation-usage",
			"glossary",
			"faqs",
			"troubleshooting",
			"changelog",
		],
		"📚 Reference": [
			"reference/organizations",
			"reference/projects",

			{
				"Blueprint Library": [
					"reference/blueprint-library/blueprint-library",
					"reference/blueprint-library/match-type",
				],
				Admin: [
					"reference/admin/billing",
					"reference/admin/usage-dashboard",
					"reference/admin/user-management",
					"reference/admin/user-permissions",
					{
						Integrations: [
							"reference/admin/integrations/integrations-overview",
							"reference/admin/integrations/github-integration",
						],
					},
				],
			},
			"reference/blueprints",
			"reference/vessels",
			"reference/fleets",
			{
				"Code Tab": [
					"reference/code/code-overview",
					"reference/code/write-code",
					"reference/code/upload-code",
					"reference/code/git-connection",
					"reference/code/command",
				],
				"Inputs Tab": [
					"reference/inputs/inputs-overview",
					"reference/inputs/vessel-inputs",
					"reference/inputs/blueprint-variables",
					"reference/inputs/blueprint-description",
					"reference/inputs/blueprint-preview",
				],
				"Requirements Tab": [
					"reference/requirements/environment-variables",
					"reference/requirements/external-package-dependencies",
				],
				"Settings Tab": [
					"reference/settings/information",
					"reference/settings/notifications",
					"reference/settings/guardrails",
				],
				Logs: [
					"reference/logs/logs-overview",
					"reference/logs/vessel-logs",
					"reference/logs/fleet-logs",
				],
				Triggers: [
					"reference/triggers/triggers-overview",
					"reference/triggers/on-demand-triggers",
					"reference/triggers/schedule-triggers",
					"reference/triggers/webhook-triggers",
				],
				"Misc Functions": [
					"reference/other-functions/duplication",
					"reference/other-functions/status",
					"reference/other-functions/timestamps-and-timezones",
					"reference/other-functions/visibility",
				],
			},
			"reference/shipyard-environment-variables",
			"reference/shipyard-url-structures",
		],
		"💡 How-Tos": [
			{
				Blueprints: [
					"how-tos/blueprints/create-blueprint",
					"how-tos/blueprints/delete-blueprint",
					"how-tos/blueprints/edit-blueprint",
					"how-tos/blueprints/duplicate-blueprint",
					"how-tos/blueprints/search-for-blueprint",
					"how-tos/blueprints/create-blueprint-variables",
					"how-tos/blueprints/reference-blueprint-variables",
					"how-tos/blueprints/reorder-blueprint-variables",
				],
				Fleets: [
					"how-tos/fleets/create-fleet",
					"how-tos/fleets/delete-fleet",
					"how-tos/fleets/see-all-files",
					"how-tos/fleets/assess-fleet-performance",
				],
				Projects: [
					"how-tos/projects/create-project",
					"how-tos/projects/delete-project",
					"how-tos/projects/edit-project",
				],
				Triggers: [
					"how-tos/triggers/add-schedule-trigger",
					"how-tos/triggers/execute-webhook-trigger",
				],
				Vessels: [
					"how-tos/vessels/build-vessel-code",
					"how-tos/vessels/build-vessel-blueprint",
					"how-tos/vessels/delete-vessel",
					"how-tos/vessels/edit-vessel",
					"how-tos/vessels/duplicate-vessel",
					"how-tos/vessels/search-for-vessel",
					"how-tos/vessels/assess-vessel-performance",
				],
				Code: ["how-tos/code/download-code"],
			},
			"how-tos/access-environment-variables",
		],
		"🚀 Tutorials": [
			"tutorials/first-project",
			"tutorials/first-vessel-with-code",
			"tutorials/advanced-code-vessel",
			"tutorials/great-expectations-blueprint",
			"tutorials/dbt-core-blueprint",
			"tutorials/first-fleet",
			"tutorials/non-native-language-vessels"
		],
		"📦 Blueprint Library": [
			"blueprint-library/amazon-athena",
			"blueprint-library/amazon-redshift",
			"blueprint-library/amazon-s3",
			"blueprint-library/azure-blob-storage",
			"blueprint-library/box",
			"blueprint-library/data-manipulation",
			"blueprint-library/dbt-cloud",
			"blueprint-library/dropbox",
			"blueprint-library/email",
			"blueprint-library/file-manipulation",
			"blueprint-library/fivetran",
			"blueprint-library/ftp",
			"blueprint-library/google-bigquery",
			"blueprint-library/google-cloud-storage",
			"blueprint-library/google-drive",
			"blueprint-library/google-sheets",
			"blueprint-library/microsoft-sql-server",
			"blueprint-library/mysql",
			"blueprint-library/postgresql",
			"blueprint-library/salesforce",
			"blueprint-library/sftp",
			"blueprint-library/slack",
			"blueprint-library/snowflake",
		],
	},
};
