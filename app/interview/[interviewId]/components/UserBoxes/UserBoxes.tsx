import Image from "next/image"
import { Hand, Mic, MicOff, Phone } from "lucide-react"

import { useUser } from "@clerk/nextjs"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { UserBoxesProps } from "./UserBoxes.types"
import { StatusCall } from "../../page.types"

export function UserBoxes({
    callStatus,
    endCall,
    startCall,
    toogleMicrophone,
    speaking,
    isMute
}: UserBoxesProps) {
  const { user } = useUser()
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-5">
        <div className="relative h-[400px]">
          <div className="h-full w-full bg-white/30 backdrop-blur-lg relative rounded-md">
            <div className="absolute inset-0 z-0 rounded-md" style={{
              backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(139, 92, 246,0.5), transparent)`
            }} />
            <div className="z-20 relative p-4 flex flex-col items-center justify-center gap-2 h-full">
              <div className="relative">
                {speaking === "ai" && (
                  <span className="absolute inset-0 flex items-center justify-center w-full">
                    <span className="animate-pulse absolute inline-flex h-16 w-16 rounded-full bg-blue-400 opacity-50"></span>
                  </span>
                )}
                <div className={cn("border-blue-200 bg-blue-100 border rounded-full p-2 relative z-10", speaking === "ai" ? "border-blue-400 shadow-xl" : "border-transparent")}>
                  <Image src="/bot.svg" alt="User bot" width={60} height={60} />
                </div>
              </div>
              <p className="text-lg font-semibold">AI Recruiter</p>
            </div>
          </div>
        </div>
        <div className="relative h-[400px]">
          <div className={cn("h-full w-full bg-white/30 backdrop-blur-lg relative rounded-md", speaking === "user" ? "border-amber-400 shadow-xl" : "border-transparent")}>
            <div className="absolute inset-0 z-0 rounded-md" style={{
              backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(255, 220, 190, 0.5), transparent)`
            }} />
            <div className="p-4 flex flex-col items-center justify-center gap-2 h-full z-10 relative rounded-md">
              <div className="relative">
                {speaking === "user" && (
                  <span className="absolute inset-0 flex items-center justify-center w-full">
                    <span className="animate-pulse absolute inline-flex h-20 w-20 rounded-full bg-amber-400 opacity-50"></span>
                  </span>
                )}
                <div className={cn("bg-amber-200 rounded-full p-1 relative z-10", speaking === "user" ? "border-amber-400 shadow-xl" : "border-transparent")}>
                  <Image src={user?.imageUrl || "/user.svg"} alt="User bot" width={60} height={60} className="rounded-full" />
                </div>
              </div>
              <p className="text-lg font-semibold">{user?.fullName}</p>
            </div>
          </div>
        </div>
      </div>
        <div className="flex items-center justify-center gap-4">
          <div className="p-2 bg-gray-500 text-white rounded-full" onClick={toogleMicrophone}>
            {isMute ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </div>
          {/* <div className="p-2 bg-gray-500 text-white rounded-full" onClick={() => console.log("Toggle video")}>
            <Hand className="w-5 h-5" />
          </div> */}
          <Button className="px-6 py-2 bg-green-500 text-white rounded-full cursor-pointer hover:text-green-500" onClick={startCall} disabled={callStatus === StatusCall.ACTIVE}>
            Start session
            <Phone className="w-5 h-5 rotate-[180deg]" />
          </Button>
          <div className={cn("px-6 py-2 bg-[#FF0200] text-white rounded-full", callStatus === StatusCall.ACTIVE ? "cursor-pointer" : "opacity-50")} onClick={endCall}>
            <Phone className="w-5 h-5 rotate-[140deg]" />
          </div>
        </div>
    </div>
  )
}
