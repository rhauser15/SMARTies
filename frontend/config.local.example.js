/*
 * LOCAL ONLY: live Agentforce chat for the on-stage demo.
 *
 * 1. Copy this file to config.local.js (git-ignored, never published).
 * 2. Fill in the values from Setup → Embedded Service Deployments → <deployment> → Install Code Snippet.
 * 3. Run the site from localhost. config.local.js only loads on localhost / 127.0.0.1.
 */
Object.assign(window.DEMO_CONFIG, {
  MODE: "live",
  live: {
    orgId: "<ORG_ID>",
    deploymentName: "<DEPLOYMENT_API_NAME>",
    siteUrl: "https://<MY_DOMAIN>.my.site.com/<ESW_SITE_PATH>",
    scrt2Url: "https://<MY_DOMAIN>.my.salesforce-scrt.com",
    bootstrapJs: "https://<MY_DOMAIN>.my.site.com/<ESW_SITE_PATH>/assets/js/bootstrap.min.js"
  }
});
