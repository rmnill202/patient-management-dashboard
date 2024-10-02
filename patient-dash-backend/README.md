# Patient Dashboard Backend
Backend server for our patient dashboard. Needs to interact with a locally running database. 

## Installation
Install all packages with the following command:
```bash
bun install
```

From here, run this command to generate your local Prisma client.
```bash
bun prisma generate
```

Finally, go into the `.env` file in this folder and update the `DATABASE_URL` variable to match the environment variables you've setup for the database.
```bash
DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${POSTGRES_PORT}/${DATABASE_NAME}?schema=public"
```

## Development
To start the development server run:
```bash
bun run dev
```

This will launch the server in a hot-reload instance at `http://localhost:3001`

## API Docs
You can access Swagger docs at `http://localhost:3001/swagger`

### Troubleshooting
- If attempts to connect fail, it could be that there is an existing volume with the same database name. Consider renaming.
- Locally running Postgres instances can also cause issues.