import { NextResponse } from "next/server";

const projects = [
  {
    id: "1",
    title: "Placement Prediction",
    description: "Predicts if you will get placement based on your CGPA and other factors.",
    imgsrc: "placement.jpeg",
  },
  {
    id: "2",
    title: "Smart School Assistant",
    description: "Hackathon winning project showing a complete system for students, teachers, and admin.",
    imgsrc: "hackathon.jpeg",
  },
  {
    id: "3",
    title: "Stock Price Predictor",
    description: "Predicts stock price considering the sentiment of news along with traditional analysis.",
    imgsrc: "ipd.jpg",
  },
];

export async function GET() {
  return NextResponse.json(projects);
}

export async function POST(request) {
  const { title, description, imgsrc } = await request.json();

  const newProject = {
    id: String(projects.length + 1),
    title,
    description,
    imgsrc,
  };

  projects.push(newProject);
  return NextResponse.json(newProject, { status: 201 });
}
