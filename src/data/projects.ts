import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "plant-classifier",
    studentName: "Maya Chen",
    title: "AI Plant Classifier",
    health: "On Track",
    progress: 72,
    milestone: "Training the first image classifier",
    nextActions: [
      "Add more labeled plant photos",
      "Review model accuracy",
      "Prepare a short demo"
    ]
  },
  {
    id: "climate-website",
    studentName: "Jordan Patel",
    title: "Climate Change Data Website",
    health: "Needs Attention",
    progress: 48,
    milestone: "Building charts for temperature trends",
    nextActions: [
      "Clean up chart labels",
      "Add data source notes",
      "Finish the mobile layout"
    ]
  },
  {
    id: "robotics-arm",
    studentName: "Ava Robinson",
    title: "Robotics Arm Prototype",
    health: "At Risk",
    progress: 31,
    milestone: "Debugging servo calibration",
    nextActions: [
      "Test each servo independently",
      "Document the wiring setup",
      "Narrow the final demo scope"
    ]
  },
  {
    id: "reading-app",
    studentName: "Sam Rivera",
    title: "Reading Comprehension App",
    health: "On Track",
    progress: 64,
    milestone: "Creating quiz feedback screens",
    nextActions: [
      "Write five sample passages",
      "Add feedback for incorrect answers",
      "Test with one classmate"
    ]
  }
];
