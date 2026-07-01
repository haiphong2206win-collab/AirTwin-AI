# AirTwin AI

**Agentic Digital Twin Platform for Post-Discharge Respiratory Recovery**

AirTwin AI is a clean, medical-focused web dashboard demo designed to support post-discharge respiratory recovery monitoring. The project simulates two main user experiences: a **Patient Portal** for daily recovery tracking and a **Doctor Dashboard** for monitoring patient status, AI alerts, and recovery reports.

This is currently a **frontend demo** built with React, using static mock data to demonstrate the product concept, UI flow, and core dashboard features.

---

## Overview

Respiratory diseases such as pneumonia, COPD, asthma, bronchitis, and post-COVID complications often require continued monitoring after hospital discharge. However, hospitals and doctors may not be able to track every patient’s daily recovery status in real time.

AirTwin AI aims to reduce this gap by providing a digital recovery dashboard where:

* Patients can track symptoms, complete daily tasks, submit cough recordings, and review recovery progress.
* Doctors can monitor patient risk levels, review AI-generated alerts, and access patient recovery reports.
* AI-assisted explanations help make recovery status more understandable and actionable.

The current version focuses on frontend interface design, route structure, component architecture, and static dashboard simulation.

---

## Key Features

### Patient Portal

* Recovery overview dashboard
* Daily recovery metrics
* Today’s recovery tasks
* Cough recording page
* Health symptom questionnaire
* Environment information
* AI Copilot support interface
* Recovery history timeline

### Doctor Dashboard

* Patient overview dashboard
* Patient list with recovery and risk status
* AI alert list
* Patient detail page
* Explainable recovery status section
* Recent monitoring data
* AI report management page

---

## Tech Stack

* **React**
* **Vite**
* **React Router**
* **JavaScript**
* **CSS**
* **Static Mock Data**

---

## Project Structure

```txt
src/
├── assets/
├── components/
│   ├── common/
│   │   └── AppLogo.jsx
│   ├── dashboard/
│   │   ├── DashboardPanel.jsx
│   │   ├── MetricCard.jsx
│   │   └── StatusPill.jsx
│   └── doctor/
│       ├── AlertItem.jsx
│       └── PatientTable.jsx
├── Data/
│   ├── doctorData.js
│   └── patientData.js
├── layouts/
│   └── DashboardLayout.jsx
├── pages/
│   ├── AiCopilot.jsx
│   ├── AuthPage.jsx
│   ├── CoughRecording.jsx
│   ├── DoctorAlerts.jsx
│   ├── DoctorOverview.jsx
│   ├── DoctorPatientDetail.jsx
│   ├── DoctorPatients.jsx
│   ├── DoctorReports.jsx
│   ├── EnvironmentInfo.jsx
│   ├── HealthQuestions.jsx
│   ├── PatientOverview.jsx
│   ├── PatientTasks.jsx
│   └── RecoveryHistory.jsx
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/haiphong2206win-collab/AirTwin-AI.git
```

### 2. Move into the project folder

```bash
cd AirTwin-AI
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will usually run at:

```txt
http://localhost:5173/
```

---

## Available Scripts

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Main Routes

### Authentication

```txt
/auth
```

### Patient Portal

```txt
/patient/overview
/patient/tasks
/patient/cough-recording
/patient/health-questions
/patient/environment
/patient/ai-copilot
/patient/recovery-history
```

### Doctor Dashboard

```txt
/doctor/overview
/doctor/patients
/doctor/alerts
/doctor/patient-detail
/doctor/reports
```

---

## Current Status

The project currently includes:

* Static frontend interface
* Responsive dashboard layout
* Patient and doctor route system
* Reusable dashboard components
* Mock data for demo purposes
* Production build support

Backend, authentication, database integration, and real AI analysis are not implemented yet.

---

## Roadmap

Planned improvements:

* Add more interactive UI states with React state management
* Add real authentication flow
* Connect frontend to backend APIs
* Store patient reports and monitoring data in a database
* Add real cough recording upload flow
* Add AI-generated recovery insights
* Deploy the demo version online

---

## Medical Disclaimer

AirTwin AI is currently a demo project for educational and product design purposes. It is not intended to provide real medical diagnosis, treatment, or emergency support.

Any AI-generated health information in this project is simulated and should not be used as a replacement for professional medical advice.

---

## Author

Developed as a frontend demo project for the AirTwin AI concept.

---

## License

No license has been specified yet.
## Live Demo

https://air-twin-ai.vercel.app/auth
