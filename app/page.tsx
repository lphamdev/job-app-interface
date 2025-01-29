"use client"

import { useState } from "react"
import { JobListings } from "@/components/JobListings"
import { JobDescription } from "@/components/JobDescription"
import type { Job } from "@/types/job"

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Dev1",
    company: "Company1",
    location: "San Francisco, CA",
    description: "We are looking for a skilled Frontend Developer to join our team...",
    skills: ["React", "TypeScript", "Next"],
    fitScore: 85,
  },
  {
    id: "2",
    title: "Dev2",
    company: "Company2",
    location: "New York, NY",
    description: "Join our backend team to build scalable and efficient systems...",
    skills: [
      "Python",
      "Kubernetes",
    ],
    fitScore: 72,
  },
]

export default function Home() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isApplying, setIsApplying] = useState(false)

  const handleSelectJob = (job: Job) => {
    setSelectedJob(job)
    setIsApplying(false)
  }

  const handleApply = () => {
    setIsApplying(true)
  }

  return (
    <div className="flex h-screen">
      <JobListings jobs={mockJobs} onSelectJob={handleSelectJob} />
      <main className="flex-1 overflow-auto">
        {selectedJob ? (
          isApplying ? (
            <div className="p-6 ml-10">
              <JobDescription job={selectedJob} onApply={handleApply} />
            </div>
          ) : (
            <div className="p-6 ml-10">
              <JobDescription job={selectedJob} onApply={handleApply} />
            </div>
          )
        ) : (
          <div className="flex h-full p-6 ml-10">
            <p className="ml-10 text-xl text-muted-foreground">Select a job to view details</p>
          </div>
        )}
      </main>
    </div>
  )
}
