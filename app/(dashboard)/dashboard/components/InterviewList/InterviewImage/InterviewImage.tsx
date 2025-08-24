import { roles } from "@/components/Shared/BtnCreateInterview/FormCreateInterview/FormCreateInterview.data";
import { InterviewImageProps } from "./InterviewImage.types";

export function InterviewImage({ interview }: InterviewImageProps) {
  const roleColors: Record<string, string> = {
    frontend: "bg-green-600/20 border-green-400/30 text-green-200",
    backend: "bg-blue-600/20 border-blue-400/30 text-blue-200",
    fullstack: "bg-indigo-600/20 border-indigo-400/30 text-indigo-200",
    ia: "bg-red-600/20 border-red-400/30 text-red-200",
    mobile: "bg-pink-600/20 border-pink-400/30 text-pink-200",
    data: "bg-orange-600/20 border-orange-400/30 text-orange-200",
    devops: "bg-red-600/20 border-red-400/30 text-red-200",
    cybersecurity: "bg-purple-600/20 border-purple-400/30 text-purple-200",
    qa: "bg-yellow-600/20 border-yellow-400/30 text-yellow-200",
  }

  const roleInfo = roles.find((role) => role.value === interview.rol);
  return (
    <div className={`p-2 rounded-md border ${roleColors[interview.rol]}`}>
      <span className="text-3xl">{roleInfo?.icon}</span>
    </div>
  )
}
