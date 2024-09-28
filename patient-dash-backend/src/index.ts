import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { authApiDetail, patientApiDetail, providerApiDetail, swaggerDocumentation } from "./constants/swagger";

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
  .use(swagger({ documentation: swaggerDocumentation }))
  .group("/auth", app => {
    return app
    .post("/login", () => "Login Route", authApiDetail)
    .post("/logout", () => "Logout Route", authApiDetail)
    .post("/register", () => "Register new provider account", authApiDetail)
  })
  .group("/api", app => app
    .get("/patients", () => "GET Patients", patientApiDetail)
    .post("/patients", () => "POSTing a new patient record", patientApiDetail)
    .get("/patients/:id", ({params: id}) => `GET Patient by ID ${id}`, patientApiDetail)
    .patch("/patients/:id", ({params: id}) => `PATCHing patient ${id}`, patientApiDetail)
    .get("/providers/:id", ({params: id}) => `GET provider by ID ${id}`, providerApiDetail)
  )
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
