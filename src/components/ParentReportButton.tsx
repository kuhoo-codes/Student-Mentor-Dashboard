export function ParentReportButton() {
  return (
    <section className="placeholder-card" aria-labelledby="parent-report-title">
      <h2 id="parent-report-title">Parent Report</h2>
      {/* TODO Stage 4: Generate a preview from selected project data without calling external APIs. */}
      <p>Parent report generation will be added here.</p>
      <button className="report-button" disabled type="button">
        Generate parent report
      </button>
    </section>
  );
}
