export type HealthStatus = "On Track" | "Needs Attention" | "At Risk";

export type StudentProject = {
  id: string;
  studentName: string;
  projectTitle: string;
  healthStatus: HealthStatus;
  progressPercent: number;
  currentMilestone: string;
  nextActions: string[];
  description: string;
};

export type ParentReport = {
  projectId: string;
  studentName: string;
  projectTitle: string;
  summary: string;
  progressNote: string;
  milestoneNote: string;
  nextSteps: string[];
  generatedAt: string;
};
