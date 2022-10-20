# Setup
  - [Dependencies](#dependencies)
    - [Production](#production)
    - [Development](#development)
  - [Commit](#commit)
  - [Configuration files](#configuration-files)
  - [basic structure](#basic-structure)
  - [Documentation](#documentation)
  - [Commands](#commands)
## Dependencies
> :warning: It's necessary to download the types separated for the packages.
### Production
- [X] express
- [X] express-async-errors
- [X] cors
- [X] helmet
- [X] swagger
- [X] morgan
- [X] dotenv
- [X] typeorm
- [X] postgre
- [X] compression
### Development
- [X] typescript
- [X] autocannon
- [X] jest
- [X] husk
- [x] eslint
- [x] commitlint
- [x] commitzen
- [X] rimraf
- [X] ts-node-dev
## Commit
- [X] Husky hook for commitzen
- [X] Hysky hook for commitlint
- [X] Commitlint accepts emoji (convention)
- [X] Commitzen
- [X] package.json for custom commitzen
## Configuration files
- [X] commitlint
- [X] tsconfig
- [X] jest config
- [X] package.json
  - [X] engine
  - [X] repository
  - [X] scripts
- [X] Dockerfile
- [X] docker-compose.yml
- [X] .dockerignore
- [X] Procfile (Heroku related)
- [X] slugignore (Heroku related)
- [X] eslint
- [X] .editorconfig
- [X] .eslintignore
- [X] gitignore (template from GitHub)
- [X] .env file (sample)
  - [X] Docker, Database, Application variables
- [X] swagger.json
## basic structure
- [X] routes
  - [X] healthcheck
- [X] app
  - [X] include middlewares
- [X] server
  - [X] gracefull shutdown
  - [X] connection with database
## Documentation
- [X] Swagger
- [X] readme file
  - [X] about
  - [X] demo
  - [X] index
  - [X] techs
  - [X] references/searches/problems solved

## Commands
* ```git clone git@github.com:dimas-prates/jwt-auth-api.git```
* ```code jwt-auth-api```
* ```CTRL+SHIFT+` ```
* ```git checkout -b setup```
* ```yarn init```
* ```yarn add -D husky @commitlint/cli commitlint-config-gitmoji eslint typescript commitizen```
* ```yarn husky install```
* ```yarn husky add .husky/commit-msg "yarn commitlint --edit ${1}"```
* ```code commitlint.config.ts```
* ```yarn commitizen init cz-conventional-changelog --yarn --dev --exact```
* ```yarn husky add .husky/prepare-commit-msg "exec </dev/tty && yarn cz --hook || true"```
* ```yarn eslint --init```
* ```yarn tsc --init```
* ```git add```
* ```git commit -m ''```
* ```yarn add -D typescript ts-node-dev rimraf```
* ```yarn tsc --init```
* ```yarn add -D jest @types/jest ts-jest autocannon```
* ```yarn jest --init```
* ```yarn add express express-async-errors dotenv pg typeorm compression cors helmet morgan```
* ```yarn add -D @types/node @types/express @types/compression @types/cors @types/helmet @types/morgan```
* ```yarn add swagger-ui-express```
* ```yarn add -D @types/swagger-ui-express```
* ```mkdir -vp src/{migrations,database,entities}```