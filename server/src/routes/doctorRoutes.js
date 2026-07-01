import express from "express";
import {
    getDoctorMetrics,
    getDoctorPatients,
    getDoctorAlerts,
    getDoctorReports,
} from "../controllers/doctorController.js";

const router = express.Router();

router.get("/metrics", getDoctorMetrics);
router.get("/patients", getDoctorPatients);
router.get("/alerts", getDoctorAlerts);
router.get("/reports", getDoctorReports);

export default router;