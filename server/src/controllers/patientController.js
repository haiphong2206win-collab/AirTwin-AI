// xử lý các API của bệnh nhân.

import {
    patientProfile,
    patientMetrics,
    todayTasks,
    recoveryTimeline,
} from "../data/patientData.js";

export function getPatientProfile(req, res) {
    res.json({
        success: true,
        data: patientProfile,
    });
}

export function getPatientMetrics(req, res) {
    res.json({
        success: true,
        data: patientMetrics,
    });
}

export function getPatientTasks(req, res) {
    res.json({
        success: true,
        data: todayTasks,
    });
}

export function getRecoveryHistory(req, res) {
    res.json({
        success: true,
        data: recoveryTimeline,
    });
}