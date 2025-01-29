"use client"

import { useState } from "react"
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import type { Job } from "@/types/job"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"


interface JobListingsProps {
  jobs: Job[]
  onSelectJob: (job: Job) => void
}

export function JobListings({ jobs, onSelectJob }: JobListingsProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Sidebar className="w-80 border-r flex-shrink-0">
      <SidebarHeader className="p-4 border-b">
        <Input placeholder="Search jobs..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-5rem)] px-4">
          <div className="space-y-4 py-4">
            {filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="cursor-pointer hover:bg-accent transition-colors"
                onClick={() => onSelectJob(job)}
              >
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                  <p className="text-sm font-semibold mt-2">Fit Score: {job.fitScore}%</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  )
}

