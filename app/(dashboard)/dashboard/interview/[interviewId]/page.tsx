"use client"
import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"

import { Calendar, Drama, Gauge, LoaderCircle, Webhook } from "lucide-react"

import axios from "axios"

import { Interview } from "@prisma/client"
import { TranscriptMessage } from "./page.types"
import { Loader } from "@/components/shared"
import { InfoCard } from "./components"
import { TranscriptBox } from "./components/TranscriptBox"

export default function InterviewPage() {
  const { interviewId } = useParams<{ interviewId: string }>()
  const router = useRouter()

  const [interview, setInterview] = useState<Interview>()

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const response = await axios.get(`/api/interview/${interviewId}`)
        setInterview(response.data)
      } catch (error) {
        console.log("Failed to fetch interview", error)
        router.push("/dashboard")
      }
    }
    if (interviewId) {
      fetchInterview()
    }
  }, [interviewId, router])

  if(!interview) {
    return <Loader />
  }
  const transcriptFinal = Array.isArray(interview?.transcript) 
  ? (interview.transcript as unknown as TranscriptMessage[])
  : []
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-primary">Interview resumen</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3 rounded-md p-6 bg-white/10 backdrop-blur-lg text-white border border-white/20">
        <InfoCard name={interview?.name} icon={Webhook} label="Name" />
        <InfoCard name={interview?.level} icon={Gauge} label="Level" />
        <InfoCard name={new Date(interview?.startedAt).toLocaleDateString()} icon={Calendar} label="Date" />
        <InfoCard name={interview?.rol} icon={Drama} label="Role" />
      </div>
      <TranscriptBox transcript={transcriptFinal} />
    </div>
  )
}
