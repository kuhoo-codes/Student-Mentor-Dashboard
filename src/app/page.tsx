import { ProjectDashboard } from "@/components/ProjectDashboard";

export default function Home() {
  return (
    <main className="dashboard-page">
      <section className="dashboard-header">
        <h1>Student Projects Dashboard</h1>
        <p>
          Track student project progress, review next actions, and generate a
          simple parent report from mock data.
        </p>
      </section>

      <ProjectDashboard />
    </main>
  );
}
