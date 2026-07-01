//xử lý các API của bác sĩ.


import {
    doctorMetrics,
    patients,
    alerts,
    reports,
} from "../data/doctorData.js";

export function getDoctorMetrics(req, res) {
    res.json({
        success: true,
        data: doctorMetrics,
    });
}

export function getDoctorPatients(req, res) {
    res.json({
        success: true,
        data: patients,
    });
}

export function getDoctorAlerts(req, res) {
    res.json({
        success: true,
        data: alerts,
    });
}

export function getDoctorReports(req, res) {
    res.json({
        success: true,
        data: reports,
    });
}