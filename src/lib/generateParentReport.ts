import type { ParentReport, StudentProject } from "@/types/project";

function getHealthSummary(project: StudentProject): string {
  if (project.healthStatus === "On Track") {
    return `${project.studentName} is making strong progress on ${project.projectTitle}. The project is moving at a healthy pace, and the current work shows steady momentum.`;
  }

  if (project.healthStatus === "Needs Attention") {
    return `${project.studentName} is making progress on ${project.projectTitle}, but a focused push on the next steps will help keep the project moving smoothly.`;
  }

  return `${project.studentName}'s ${project.projectTitle} project may need additional support right now. A smaller, focused plan should help make the next milestone more manageable.`;
}

function getProgressNote(project: StudentProject): string {
  if (project.healthStatus === "On Track") {
    return `The project is ${project.progressPercent}% complete, which suggests ${project.studentName} should continue the current pace and keep documenting decisions along the way.`;
  }

  if (project.healthStatus === "Needs Attention") {
    return `The project is ${project.progressPercent}% complete. The foundation is in place, and the next actions should help turn that progress into a clearer final result.`;
  }

  return `The project is ${project.progressPercent}% complete. The best path forward is to focus on the most important next action first and reduce any extra scope.`;
}

function getMilestoneNote(project: StudentProject): string {
  return `Current milestone: ${project.currentMilestone}. This is the main area to discuss during the next mentor check-in.`;
}

export function generateParentReport(project: StudentProject): ParentReport {
  return {
    projectId: project.id,
    studentName: project.studentName,
    projectTitle: project.projectTitle,
    summary: getHealthSummary(project),
    progressNote: getProgressNote(project),
    milestoneNote: getMilestoneNote(project),
    nextSteps: project.nextActions,
    generatedAt: new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short"
    })
  };
}
