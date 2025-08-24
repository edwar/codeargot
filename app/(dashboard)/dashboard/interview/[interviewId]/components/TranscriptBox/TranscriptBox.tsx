import { cn } from "@/lib/utils";
import { TranscriptBoxProps } from "./TranscriptBox.types";
import { BotMessageSquare } from "lucide-react";
import { useUser } from "@clerk/nextjs";

export function TranscriptBox({ transcript }: TranscriptBoxProps) {
  const { user } = useUser()

  return (
    <div className="mt-5 p-4 md:px-10 border border-white/10 rounded-md bg-white/10 backdrop-blur-lg max-h-9/1 overflow-y-auto">
      <h3 className="text-2xl font-semibold mb-2">Transcript</h3>
      {transcript.length > 0 ? (
        <div>
          {transcript.map((message, index) => {
            const isAssistant = message.role === "assistant"
            return (
              <div key={index} className={cn("flex mb-2", isAssistant ? "justify-start" : "justify-end")}>
                <div className={cn("max-w-[80%] px-4 py-2 rounded-2xl shadow-md text-sm whitespace-pre-wrap", isAssistant ? "bg-violet-300 text-left" : "bg-emerald-300 text-right")}>
                  <span className="block font-semibold mb-1 text-xs text-gray-500 uppercase tracking-wide">{isAssistant ? <BotMessageSquare className="h-6 w-6 text-purple-500 mt-1" /> : user?.fullName}</span>
                  <span>{message.content}</span>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <p className="text-gray-400 text-sm">No transcript available</p>
      )}
    </div>
  )
}
