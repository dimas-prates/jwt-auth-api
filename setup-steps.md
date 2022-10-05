# Setup
## Dependencies
> :warning: necessary to download apart the types for the packages
### Production
- [ ] express
- [ ] express-async-errors
- [ ] cors
- [ ] helmet
- [ ] swagger
- [ ] husk
- [ ] morgan
- [ ] dotenv
- [ ] typeorm
### Development
- [ ] typescript
- [ ] autocannon
- [ ] jest
- [ ] ts-node-dev
- [ ] eslint
- [ ] rimraf
## Commit
- [ ] Husky hook for commitzen
- [ ] Hysky hook for commitlint
- [ ] commitlint accepts emoji (convention)
- [ ] Commitzen
- [ ] package.json for custom commitzen
## Configuration files
- [ ] commitlint
- [ ] tsconfig
- [ ] jest config
- [ ] package.json
  - [ ] engine
  - [ ] repository
  - [ ] scripts
- [ ] Dockerfile
- [ ] docker-compose.yml
- [ ] .dockerignore
- [ ] Procfile (Heroku related)
- [ ] slugignore (Heroku related)
- [ ] eslint
- [ ] .editorconfig
- [ ] .eslintignore
- [ ] gitignore (template from GitHub)
- [ ] .env file (sample)
- [ ] swagger.json
## basic structure
- [ ] routes
  - [ ] healthcheck
- [ ] app
  - [ ] include middlewares
- [ ] server
  - [ ] gracefull shutdown
## Documentation
- [ ] Swagger
- [ ] readme file
  - [ ] about
  - [ ] demo
  - [ ] index
  - [ ] techs

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
* ```git add```
* ```git commit -m ''```