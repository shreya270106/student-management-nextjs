import { Student } from "@/types/student";

export async function getStudents(): Promise<Student[]> {
  const response = await fetch("/api/students");

  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }

  return response.json();
}

export async function addStudent(
  name: string,
  email: string,
  course: string
) {
  const response = await fetch("/api/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      course,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to add student");
  }

  return response.json();
}

export async function deleteStudent(id: number) {
  const response = await fetch("/api/students", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to delete student");
  }

  return response.json();
}