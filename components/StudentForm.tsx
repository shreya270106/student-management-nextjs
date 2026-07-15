"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { addStudent } from "@/services/studentApi";

export default function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !course.trim()) {
      alert("Please fill all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      await addStudent(name, email, course);
      router.refresh();

      setName("");
      setEmail("");
      setCourse("");
    } catch (error) {
      console.error(error);
      alert("Failed to add student");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="mb-8 rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">
        Add Student
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full rounded-lg border p-3"
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {isSubmitting ? "Adding..." : "Add Student"}
        </button>
      </form>
    </div>
  );
}