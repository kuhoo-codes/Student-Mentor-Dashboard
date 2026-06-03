import { HealthBadge } from "@/components/HealthBadge";
import { ProgressBar } from "@/components/ProgressBar";
import type { Project } from "@/types/project";

type ProjectDetailCardProps = {
  project: Project;
  parentReport: string | null;
  onGenerateReport: () => void;
};

export function ProjectDetailCard({
  project,
  parentReport,
  onGenerateReport
}: ProjectDetailCardProps) {
  return (
    <section className="card" aria-labelledby="project-detail-title">
      <div className="detail-header">
        <div>
          <p className="detail-label">{project.studentName}</p>
          <h2 id="project-detail-title">{project.title}</h2>
        </div>
        <HealthBadge health={project.health} />
      </div>

      <div className="detail-section">
        <h3>Progress</h3>
        <ProgressBar value={project.progress} />
      </div>

      <div className="detail-section">
        <h3>Current Milestone</h3>
        <p>{project.milestone}</p>
      </div>

      <div className="detail-section">
        <h3>Next Actions</h3>
        <ul className="next-actions-list">
          {project.nextActions.map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ul>
      </div>

      <div className="detail-section">
        <h3>Parent Report</h3>
        <button
          className="report-button"
          onClick={onGenerateReport}
          type="button"
        >
          Generate Parent Report
        </button>
        {parentReport ? <p className="parent-report">{parentReport}</p> : null}
      </div>
    </section>
  );
}
