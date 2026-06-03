import { ParentReportButton } from "@/components/ParentReportButton";
import { HealthBadge } from "@/components/HealthBadge";
import { ProgressBar } from "@/components/ProgressBar";
import type { ParentReport, StudentProject } from "@/types/project";

type ProjectDetailCardProps = {
  project: StudentProject;
  onGenerateReport: (report: ParentReport) => void;
};

export function ProjectDetailCard({
  project,
  onGenerateReport
}: ProjectDetailCardProps) {
  return (
    <section className="dashboard-card" aria-labelledby="project-detail-title">
      <div className="detail-header">
        <div>
          <p className="detail-label">{project.studentName}</p>
          <h2 id="project-detail-title">{project.projectTitle}</h2>
        </div>
        <HealthBadge status={project.healthStatus} />
      </div>

      <p className="project-description">{project.description}</p>

      <div className="detail-section">
        <h3>Progress</h3>
        <ProgressBar value={project.progressPercent} />
      </div>

      <div className="detail-section">
        <h3>Current Milestone</h3>
        <p>{project.currentMilestone}</p>
      </div>

      <div className="detail-section">
        <h3>Next Actions</h3>
        <ul className="next-actions-list">
          {project.nextActions.map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ul>
      </div>

      <ParentReportButton
        onGenerateReport={onGenerateReport}
        project={project}
      />
    </section>
  );
}
