import { NextResponse } from 'next/server';
import projects from '../../data';

export async function GET(request, { params }) {
  const projectId = params.id;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return NextResponse.json({ message: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}
export async function PUT(request, { params }) {
  const projectId = params.id;
  const projectIndex = projects.findIndex((p) => p.id === projectId);

  if (projectIndex === -1) {
    return NextResponse.json({ message: 'Project not found' }, { status: 404 });
  }

  const { title, description, imgsrc } = await request.json();
  const updatedProject = { ...projects[projectIndex], title, description, imgsrc };
  projects[projectIndex] = updatedProject;

  return NextResponse.json(updatedProject);
}

export async function DELETE(request, { params }) {
  const projectId = params.id;
  const projectIndex = projects.findIndex((p) => p.id === projectId); 

  if (projectIndex === -1) {
    return NextResponse.json({ message: 'Project not found' }, { status: 404 });
  }

  projects.splice(projectIndex, 1);

  return new NextResponse(null, { status: 204 });
}
