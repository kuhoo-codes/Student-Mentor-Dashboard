import { ParentReportButton } from "@/components/ParentReportButton";
import { ProjectDetailCard } from "@/components/ProjectDetailCard";
import { ProjectList } from "@/components/ProjectList";

export default function Home() {
  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <p className="eyebrow">Assessment Stage 1</p>
        <h1>Student Projects Dashboard</h1>
        <p>
          This page will show student project health, progress, milestones,
          next actions, and a parent-facing report workflow.
        </p>
      </section>

      {/* TODO Stage 2: Add mock project data and pass it into the dashboard components. */}
      {/* TODO Stage 3: Add selected project state and click behavior. */}
      <section className="dashboard-grid" aria-label="Student project dashboard">
        <ProjectList />

        <aside className="dashboard-detail-stack">
          <ProjectDetailCard />
          <ParentReportButton />
        </aside>
      </section>

      {/* TODO Stage 4: Add real UI components, progress bar, health badge, and parent report preview. */}
      {/* TODO Stage 5: Polish styling, responsiveness, and final testing. */}
    </main>
  );
}
