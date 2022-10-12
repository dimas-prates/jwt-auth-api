# Setup
## Dependencies
> :warning: It's necessary to download the types separated for the packages.
### Production
- [ ] express
- [ ] express-async-errors
- [ ] cors
- [ ] helmet
- [ ] swagger
- [ ] morgan
- [ ] dotenv
- [ ] typeorm
- [ ] postgre
- [ ] compression
### Development
- [X] typescript
- [X] autocannon
- [ ] jest
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
- [ ] package.json
  - [X] engine
  - [X] repository
  - [ ] scripts
- [ ] Dockerfile
- [ ] docker-compose.yml
- [ ] .dockerignore
- [ ] Procfile (Heroku related)
- [ ] slugignore (Heroku related)
- [X] eslint
- [X] .editorconfig
- [X] .eslintignore
- [X] gitignore (template from GitHub)
- [ ] .env file (sample)
  - [ ] Docker, Database, Application variables
- [ ] swagger.json
## basic structure
- [ ] routes
  - [ ] healthcheck
- [ ] app
  - [ ] include middlewares
- [ ] server
  - [ ] gracefull shutdown
  - [ ] connection with database
## Documentation
- [ ] Swagger
- [ ] Redocly
- [ ] readme file
  - [ ] about
  - [ ] demo
  - [ ] index
  - [ ] techs
  - [ ] references/searches/problems solved

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