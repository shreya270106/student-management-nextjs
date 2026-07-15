import { Student } from "@/types/student";

interface StudentCardProps {
  student: Student;
}

export default function StudentCard({
  student,
}: StudentCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md border">
      <h2 className="text-xl font-bold">{student.name}</h2>

      <p className="mt-2 text-gray-600">
        <strong>Email:</strong> {student.email}
      </p>

      <p className="text-gray-600">
        <strong>Course:</strong> {student.course}
      </p>

      <div className="mt-5 flex gap-3">
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          View
        </button>

        <button className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  );
}