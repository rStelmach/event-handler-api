# event-handler-api
## Stack used 
### -web : React + TS + Vite + Jest + Redux Toolkit
### -api: NodeJs + TS + ExpressJs + Prisma PostgreSQL + Jest + Swagger for documentation

## Few words: 
I used different architecture in this particular API than I normally use because of the size of an app. Controllers and routes are seperate one folder, for better accessibility. If project was bigger, 
the best solution would be to group files by modules, eg. User, Event etc.
## Setup

## 1. Clone repositories from github :
### -web: https://github.com/rStelmach/event-handler-web
### -api: https://github.com/rStelmach/event-handler-api
## 2. After cloning, run "yarn install" in every repo 
## 3. Go to api repo, create .env file and paste `DATABASE_URL = "postgresql://root:root@localhost:5432/event_handler"`
## 4. Open docker desktop and then from the root directory in a new terminal run  `docker-compose up -d`
## 5. Then in other terminal run `prisma migrate dev` in order to sync with Prisma.Schema 
## 6. `yarn start` starts the API, `yarn test` runs all the tests
## 7.  Go to the web repository. After all modules were installed, run `yarn dev --host` and then select localhost:3000 option"
## 8. `yarn test` runs the tests on the frontend
