import { MessagesProps } from "./Messages.types";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";

export function Messages({ messages }: MessagesProps) {
  const { user } = useUser()
  return (
    <div className="overflow-y-auto scrollbar-none overflow-auto h-60 mt-4 max-w-3xl mx-auto w-full p-4 bg-white/10 backdrop-blur-md border border-gray-200 rounded-lg space-y-4 shadow-sm">
      <h2 className="text-xl font-semibold mt-8 mb-2 text-center">Transcription</h2>
      <div>
        {messages.map((message, index) => {
          const assistant = message.role === "assistant"
          return (
            <div key={index} className={cn("flex mb-2", assistant ? "justify-start" : "justify-end")}>
             <div className={cn("max-w-[80%] px-4 py-2 rounded-2xl shadow-md text-sm whitespace-pre-wrap", assistant ? "bg-violet-300 text-left" : "bg-emerald-300 text-right")}>
                <span className="block font-semibold mb-1 tyext-xs text-gray-500 uppercase tracking-wide">{assistant ? "Recruiter" : user?.fullName}</span>
                <span>{message.content}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
