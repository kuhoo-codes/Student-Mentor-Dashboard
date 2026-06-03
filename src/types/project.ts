export type Project = {
  id: string;
  studentName: string;
  title: string;
  health: "On Track" | "Needs Attention" | "At Risk";
  progress: number;
  milestone: string;
  nextActions: string[];
};
