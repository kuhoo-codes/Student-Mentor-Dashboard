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
  projectId: StudentProject["id"];
  summary: string;
  generatedAt: string;
};
