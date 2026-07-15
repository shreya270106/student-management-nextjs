import StudentCard from "@/components/StudentCard";
import StudentForm from "@/components/StudentForm";
import { prisma } from "@/lib/prisma";
import { Student } from "@/types/student";

export default async function Home() {
  const students: Student[] = await prisma.student.findMany({
    orderBy: {
      id: "asc",
    },
  });

  console.log("Students from DB:", students);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-bold">
        Student Management System
      </h1>

      <p className="mb-4 text-lg font-semibold">
        Total Students: {students.length}
      </p>

      <StudentForm />

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {students.map((student:Student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>
    </main>
  );
}