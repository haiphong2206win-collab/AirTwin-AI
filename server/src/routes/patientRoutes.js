
// Tạo ra các API 

import express from "express";
import {
    getPatientProfile,
    getPatientMetrics,
    getPatientTasks,
    getRecoveryHistory,
} from "../controllers/patientController.js";

const router = express.Router();

router.get("/profile", getPatientProfile);
router.get("/metrics", getPatientMetrics);
router.get("/tasks", getPatientTasks);
router.get("/recovery-history", getRecoveryHistory);

export default router;