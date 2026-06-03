import { generateParentReport } from "@/lib/generateParentReport";
import type { ParentReport } from "@/types/project";
import type { StudentProject } from "@/types/project";

type ParentReportButtonProps = {
  project: StudentProject;
  onGenerateReport: (report: ParentReport) => void;
};

export function ParentReportButton({
  project,
  onGenerateReport
}: ParentReportButtonProps) {
  const handleGenerateReport = () => {
    onGenerateReport(generateParentReport(project));
  };

  return (
    <div className="report-panel" aria-labelledby="parent-report-title">
      <h2 id="parent-report-title">Parent Report</h2>
      <p>
        Creates a parent friendly summary based on current project progress.
      </p>
      <button
        className="report-button"
        onClick={handleGenerateReport}
        type="button"
      >
        Generate parent report
      </button>
    </div>
  );
}
