# NodeExpressMonitor

<br>

> **NodeExpressMonitoring** is a simple node/express backend application that demonstrates how to monitor a nodejs application with _New Relic_.

<br>

## Requirements

- Create a [New Relic](https://newrelic.com/) account.
- On the exporer tab, click on _APM_
- Click on _"Add more data"_
- Select the _"Node JS" language agent
- Follow the guideliines to setup new relic agent in your node application

<br>

## Run the application

- Add .env file to the project root
- Set environment variables for NEW_RELIC_APP_NAME,
    NEW_RELIC_LICENSE_KEY, POSTGRESQL_CONNSTRING and PORT in .env file.
-

#### To run this application in terminal, run the commands below:
```
npm install
npm start
```

#### To run this application in docker, the followiing requirements should be met:

- Docker []()
- docker-compose []()

<br>

#### Commands

```
docker-compose up -d
```

