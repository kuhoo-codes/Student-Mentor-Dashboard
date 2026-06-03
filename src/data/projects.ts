import type { StudentProject } from "@/types/project";

export const projects: StudentProject[] = [
  {
    id: "project-ai-plant-classifier",
    studentName: "Maya Chen",
    projectTitle: "AI Plant Classifier",
    healthStatus: "On Track",
    progressPercent: 72,
    currentMilestone: "Training the first image classification model",
    nextActions: [
      "Add 30 more labeled leaf images",
      "Compare model accuracy across two training runs",
      "Prepare a short demo script"
    ],
    description:
      "A computer vision project that identifies common houseplants from leaf photos and explains the likely care needs."
  },
  {
    id: "project-climate-website",
    studentName: "Jordan Patel",
    projectTitle: "Climate Change Data Website",
    healthStatus: "Needs Attention",
    progressPercent: 48,
    currentMilestone: "Building charts for temperature and emissions trends",
    nextActions: [
      "Clean up chart labels",
      "Add sources for each dataset",
      "Finish the mobile layout for the data section"
    ],
    description:
      "An educational website that turns climate datasets into simple charts for middle school students."
  },
  {
    id: "project-robotics-arm",
    studentName: "Ava Robinson",
    projectTitle: "Robotics Arm Prototype",
    healthStatus: "At Risk",
    progressPercent: 31,
    currentMilestone: "Debugging servo calibration and range limits",
    nextActions: [
      "Document the wiring diagram",
      "Test each servo independently",
      "Reduce the demo scope to one reliable pick-and-place motion"
    ],
    description:
      "A hardware and software project focused on controlling a small robotic arm with repeatable movement."
  },
  {
    id: "project-reading-app",
    studentName: "Sam Rivera",
    projectTitle: "Reading Comprehension App",
    healthStatus: "On Track",
    progressPercent: 64,
    currentMilestone: "Creating quiz feedback screens",
    nextActions: [
      "Write five sample reading passages",
      "Add feedback text for incorrect answers",
      "Run a usability test with one peer"
    ],
    description:
      "A web app that helps students practice reading passages and receive immediate comprehension feedback."
  },
  {
    id: "project-solar-system",
    studentName: "Nina Okafor",
    projectTitle: "Solar System Simulation",
    healthStatus: "Needs Attention",
    progressPercent: 55,
    currentMilestone: "Adding planet orbit controls and labels",
    nextActions: [
      "Confirm relative orbit speeds",
      "Improve text contrast on dark backgrounds",
      "Add a reset view button"
    ],
    description:
      "An interactive browser simulation that shows planet orbits, labels, and basic facts about the solar system."
  },
  {
    id: "project-recycling-tracker",
    studentName: "Leo Martinez",
    projectTitle: "Community Recycling Tracker",
    healthStatus: "On Track",
    progressPercent: 81,
    currentMilestone: "Preparing final dashboard screenshots",
    nextActions: [
      "Add weekly summary totals",
      "Review copy for the presentation",
      "Practice the final walkthrough"
    ],
    description:
      "A simple dashboard that tracks neighborhood recycling submissions and highlights weekly participation trends."
  }
];
