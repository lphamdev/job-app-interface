import { Button } from "@/components/ui/button"
import type { Job } from "@/types/job"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface JobDescriptionProps {
  job: Job
  onApply: () => void
}

export function JobDescription({ job, onApply }: JobDescriptionProps) {
  return (
    <Card className="m-6">
      <CardHeader>
        <CardTitle className="text-2xl">{job.title}</CardTitle>
        <p className="text-xl text-muted-foreground">{job.company}</p>
        <p className="text-muted-foreground">{job.location}</p>
        <div className="mt-4">
          <p className="text-sm font-semibold mb-2">Fit Score: {job.fitScore}%</p>
          <Progress value={job.fitScore} className="w-full" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold mb-2">Job Description</h4>
          <p>{job.description}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Requirements</h4>
          <ul className="list-disc pl-5 space-y-1">
            {job.skills.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        <Button onClick={onApply} className="w-full">
          Apply Now
        </Button>
      </CardContent>
    </Card>
  )
}

