import { StudentProjectsDashboard } from "@/components/StudentProjectsDashboard";

export default function Home() {
  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <p className="eyebrow">Assessment Stage 4</p>
        <h1>Student Projects Dashboard</h1>
        <p>
          This page will show student project health, progress, milestones,
          next actions, and a parent-facing report workflow.
        </p>
      </section>

      <StudentProjectsDashboard />

      {/* TODO Stage 5: Polish styling, responsiveness, and final testing. */}
    </main>
  );
}
