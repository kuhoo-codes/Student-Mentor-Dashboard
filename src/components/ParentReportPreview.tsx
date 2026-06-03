import type { ParentReport } from "@/types/project";

type ParentReportPreviewProps = {
  report: ParentReport | null;
};

export function ParentReportPreview({ report }: ParentReportPreviewProps) {
  if (!report) {
    return (
      <section className="dashboard-card report-preview empty-state">
        <h2>Parent Report Preview</h2>
        <p>
          No parent report generated yet. Select a project and click Generate
          Parent Report.
        </p>
      </section>
    );
  }

  return (
    <section className="dashboard-card report-preview">
      <div className="report-preview-header">
        <div>
          <p className="detail-label">Parent Report</p>
          <h2>{report.projectTitle}</h2>
        </div>
        <p className="generated-at">Generated {report.generatedAt}</p>
      </div>

      <dl className="report-summary-list">
        <div>
          <dt>Student</dt>
          <dd>{report.studentName}</dd>
        </div>
        <div>
          <dt>Summary</dt>
          <dd>{report.summary}</dd>
        </div>
        <div>
          <dt>Progress Note</dt>
          <dd>{report.progressNote}</dd>
        </div>
        <div>
          <dt>Current Milestone</dt>
          <dd>{report.milestoneNote}</dd>
        </div>
      </dl>

      <div className="detail-section">
        <h3>Recommended Next Steps</h3>
        <ul className="next-actions-list">
          {report.nextSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </div>

      <p className="report-disclaimer">
        Report generated from mock project data for demo purposes.
      </p>
    </section>
  );
}
