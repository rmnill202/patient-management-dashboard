import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'

// URL Structure: //
////////////////////
// auth/login
// auth/logout
// auth/register
// api/patients
  // GET
  // POST
// api/patients/:id
  // GET
  // PATCH
// api/providers/:id
  // GET
  

  // .group("/auth", app => {
  //       return app
  //           .get("/", () => "Hi")
  //           .post("/sign-in", ({ body }) => body)
  //           .put("/sign-up", ({ body }) => body)
  //   })

const app = new Elysia()
  .use(swagger())
  .group("/auth", app => {
    return app
    .post("/login", () => "Login Route")
    .post("/logout", () => "Logout Route")
    .post("/register", () => "Register new provider account")
  })
  .group("/api", app => app
    .get("/patients", () => "GET Patients")
    .post("/patients", () => "POSTing a new patient record")
    .get("/patients/:id", ({params: id}) => `GET Patient by ID ${id}`)
    .patch("/patients/:id", ({params: id}) => `PATCHing patient ${id}`)
    .get("/providers/:id", ({params: id}) => `GET provider by ID ${id}`)
  )
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
