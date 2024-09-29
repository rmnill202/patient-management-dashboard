/**
 * Sets up some helpful Swagger constants for documenting my APIs
 */

const swaggerDocumentation = {
  tags: [
    { name: 'Auth', description: 'Endpoints for login/logout, creating accounts' },
    { name: 'Patient', description: 'APIs for patient data' },
    { name: 'Provider', description: 'APIs for provider data' }
  ],
  info: {
    title: 'Patient Dashboard APIs',
    version: '0.0.1'
  },
};


const authApiDetail = { detail: { tags: ['Auth'] } };
const patientApiDetail = { detail: { tags: ['Patient'] } };
const providerApiDetail = { detail: { tags: ['Provider'] } };

export {
  swaggerDocumentation,
  authApiDetail,
  patientApiDetail,
  providerApiDetail,
};