// documentação: https://www.npmjs.com/package/swagger-autogen
// npm run swagger-autogen

const swaggerAutogen = require('swagger-autogen');
const options = {
    openapi: "3.0.0",          
    language: "pt-BR",         
    disableLogs: false,     
    autoHeaders: true,     
    autoQuery: true,       
    autoBody: true         
}

const doc = {
  info: {
    title: 'Wolffox Api Docs',
    description: "Essa api tem a base de ser um gerenciador de eventos",
    contact: {
        name: "Suporte",
        email: "suporte@wolffox.com.br"
    },
  },
  host: 'Wolffox.com.br/api',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./src/routes/index.ts'];
swaggerAutogen(options)(outputFile, endpointsFiles, doc);
