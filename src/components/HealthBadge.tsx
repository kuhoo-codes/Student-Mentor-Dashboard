import type { StudentProject } from "@/types/project";

type HealthBadgeProps = {
  status: StudentProject["healthStatus"];
};

const statusClassNames: Record<StudentProject["healthStatus"], string> = {
  "On Track": "health-badge health-badge--on-track",
  "Needs Attention": "health-badge health-badge--needs-attention",
  "At Risk": "health-badge health-badge--at-risk"
};

export function HealthBadge({ status }: HealthBadgeProps) {
  return <span className={statusClassNames[status]}>{status}</span>;
}
