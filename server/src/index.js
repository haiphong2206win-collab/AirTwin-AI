import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import healthRoutes from "./routes/healthRoutes.js";
import patientRoutes from "./routes/patientRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/health", healthRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/doctor", doctorRoutes);

app.listen(PORT, () => {
    console.log(`AirTwin AI backend is running on port ${PORT}`);
});