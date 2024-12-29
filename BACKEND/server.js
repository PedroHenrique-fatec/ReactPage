import express from "express";
import cors from "cors";

import userRouter from "./src/routes/userRoutes.js";
import roomRouter from "./src/routes/roomsRoutes.js";
import reservationRouter from "./src/routes/reservationRoutes.js";
import adminRouter from "./src/routes/adminRoutes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  })
);

app.use(express.json());

app.use("/users", userRouter);
app.use("/rooms", roomRouter);
app.use("/reservations", reservationRouter);
app.use("/admin", adminRouter);

const port = 3000;

app.listen(port, () => {
  console.log("O servidor está rodando na porta: ", port);
});
