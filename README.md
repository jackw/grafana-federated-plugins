# Grafana Plugins using Federated Module

This is a monorepo of Grafana plugins that have all be scaffolded (or migrated) to use the create-plugin scaffolder. Their webpack configs are extended to use the `ModuleFederationPlugin` that ships with Webpack 5.

Simple scaffolded plugins:

- [app-basic](./plugins/app-basic)
- [datasource-basic](./plugins/datasource-basic)
- [panel-basic](./plugins/panel-basic)

Copies of community plugins:

- [app-redis](./plugins/app-redis)
- [clock-panel](./plugins/clock-panel)
- [datasource-sqlite](./plugins/datasource-sqlite)

This repo is a PoC to prove that Grafana can load plugins using a different technology to SystemJS.

## Usage

### Installation

- `yarn`
- `yarn build:all`

Subsequent builds will make use of nx.dev cache to speed up build times.

NOTE: Currently this monorepo makes no attempt to get unit tests or e2e tests to work.
