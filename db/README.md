# Patient Dashboard Database

## Setup
Create a `.env` file in this directory, using the following template
```
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_PORT=5432
DATABASE_NAME=
```

**These values will need to match the username, password and port in the Prisma configuration.** Check the README file in the backend folder for more details.

## Running
To run the database, use the following command from this folder.
- You may also run it detached from the terminal with `-d`
- I'll be using Rancher Desktop for container management

`docker-compose up`
