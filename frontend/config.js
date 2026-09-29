/*
 * Demo configuration (safe to publish).
 *
 * MODE "mock" → scripted Agentforce conversation. No AI, no API calls, nothing to abuse.
 *
 * Live mode (real Agentforce via Embedded Messaging) is local-only on purpose: copy
 * config.local.example.js → config.local.js (git-ignored), fill it in, and open the site
 * from http://localhost. config.local.js is never loaded on the public site.
 */
window.DEMO_CONFIG = {
  MODE: "mock",

  // Typing speed for the mock agent (ms per message). Lower = faster demo.
  agentDelay: 1100
};
