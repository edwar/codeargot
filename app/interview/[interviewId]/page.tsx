"use client"
import { Interview } from "@prisma/client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Messages, UserBoxes } from "./components"
import { Message, MessageVapi, StatusCall, Speaker } from "./page.types"
import { vapi } from "@/lib/vapi.sdk"
import { roles } from "@/components/shared/BtnCreateInterview/FormCreateInterview/FormCreateInterview.data"
import { toast } from "sonner"
import { Loader } from "@/components/shared"

export default function InterviewPage() {
  const { interviewId } = useParams()
  const [loading, setLoading] = useState(true)
  const router = useRouter()


  const [callStatus, setCallStatus] = useState<StatusCall>(StatusCall.INACTIVE)
  const [isMute, setIsMute] = useState<boolean>(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [speaking, setSpeaking] = useState<Speaker>(null)
  const [interview, setInterview] = useState<Interview>()

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const response = await axios.get(`/api/interview/${interviewId}`)
        setInterview(response.data)
      } catch (error) {
        console.log("Failed to fetch interview", error)
        router.push("/dashboard")
      } finally {
        setLoading(false)
      }
    }
    if (interviewId) {
      fetchInterview()
    }
  }, [interviewId, router])

  useEffect(() => {
    const ocCallStart = () => setCallStatus(StatusCall.ACTIVE)
    const ocCallEnd = () => setCallStatus(StatusCall.FINISHED)

    const onSpeechStart = () => { }
    const onSpeechEnd = () => { }

    const onError = (error: Error) => console.error(error)

    const onMessage = (message: MessageVapi) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage: Message = {
          role: message.role,
          content: message.transcript
        }
        setMessages((prevMessages) => [newMessage, ...prevMessages])

        if (message.role === "assistant") {
          setSpeaking("ai")
        } else if (message.role === "user") {
          setSpeaking("user")
        }
      }
    }

    vapi.on("call-start", ocCallStart)
    vapi.on("call-end", ocCallEnd)
    vapi.on("message", onMessage)
    vapi.on("speech-start", onSpeechStart)
    vapi.on("speech-end", onSpeechEnd)
    vapi.on("error", onError)

    return () => {
      vapi.off("call-start", ocCallStart)
      vapi.off("call-end", ocCallEnd)
      vapi.off("message", onMessage)
      vapi.off("speech-start", onSpeechStart)
      vapi.off("speech-end", onSpeechEnd)
      vapi.off("error", onError)
    }
  }, [])

  const toogleMicrophone = () => {
    const isMute = vapi.isMuted()
    vapi.setMuted(!isMute)
    setIsMute(!isMute)
  }

  const startCall = async () => {
    setCallStatus(StatusCall.CONNECTING)
    setLoading(true)
    const assistantOverrides = {
      variableValues: {
        topic: `Rol: ${interview?.rol} Level: ${interview?.level}`
      }
    }
    if (vapi) {
      await vapi.start("a59e5a15-b097-49d0-a9a0-8c0c9ee7ff7b", assistantOverrides)
      setLoading(false)
    }
  }

  const endCall = async () => {
    setCallStatus(StatusCall.FINISHED)

    toast("Interview finished")
    if (vapi) {
      vapi.stop()
    }

    try {
      await axios.post(`/api/interview/${interviewId}/complete`, {
        transcript: messages
      })
    } catch (error) {
      console.error("Failed to complete interview", error)
    }

    router.push(`/dashboard`)
  }

  return (
    <>
      {loading && <Loader />}
      <div className="max-w-6xl h-screen mx-auto p-6 space-y-6 flex flex-col items-center justify-center">
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              Interview in progress
              <span className="mr-1.5 flex h-3 w-3 items-center">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400"></span>
              </span>
            </h1>
            <p className="text-foreground/80 capitalize">
              Rol : {roles.find((role) => role.value === interview?.rol)?.icon} {interview?.rol}
            </p>
            <p className="text-foreground/80 capitalize">
              Level: {interview?.level}
            </p>
          </div>
        </div>
        <UserBoxes
          callStatus={callStatus}
          endCall={endCall}
          startCall={startCall}
          toogleMicrophone={toogleMicrophone}
          speaking={speaking}
          isMute={isMute}
        />
        <Messages messages={messages} />
      </div>
    </>
  )
}
