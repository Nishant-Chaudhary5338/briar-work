// apiConfig.js
const environments = {
  local: 'local',
  engsap: 'engsap',
  dev: 'dev',
  prd: 'prd',
};

// Choose the environment you want to use
const selectedEnvironment = environments.engsap;

const baseUrls = {
  local: 'http://localhost:3002',
  engsap: 'http://engsap:3002',
  dev: 'http://dev.engsap:3002',
  prd: 'http://prd.engsap:3002',
};

export default baseUrls[selectedEnvironment];
