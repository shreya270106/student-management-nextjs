import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const students = await prisma.student.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return NextResponse.json(students);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log("Incoming body:", body);

    const student = await prisma.student.create({
      data: {
        name: body.name,
        email: body.email,
        course: body.course,
      },
    });

    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.error("========== PRISMA ERROR ==========");
    console.error(error);
    console.error("==================================");

    return NextResponse.json(
      {
        message: "Failed to create student",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();

  await prisma.student.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({
    message: "Deleted",
  });
}