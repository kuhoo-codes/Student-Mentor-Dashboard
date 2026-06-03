import type { Project } from "@/types/project";

type HealthBadgeProps = {
  health: Project["health"];
};

const healthClassName: Record<Project["health"], string> = {
  "On Track": "health-badge health-badge--on-track",
  "Needs Attention": "health-badge health-badge--needs-attention",
  "At Risk": "health-badge health-badge--at-risk"
};

export function HealthBadge({ health }: HealthBadgeProps) {
  return <span className={healthClassName[health]}>{health}</span>;
}
