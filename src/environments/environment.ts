// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  offsync: false,
  urlWeb: 'http://localhost:4200/',
  urlBase: 'http://localhost:8089/api',
  urlRepositorioUrbing: 'https://repositorio.gruposfa.com.br/api-urbing/hml',
  urlSocket: 'http://localhost:8089/ws-socket',
  urlScheduleHealth: 'https://hml-schedule.urbing.com.br/actuator/health',
  urlOzirizHealth: 'https://hml-api.oziriz.com.br/actuator/health',
  urlSyncHealth: 'https://hml-sync.urbing.com.br/actuator/health'
};
