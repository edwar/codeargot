import { Badge } from "@/components/ui/badge";

export function StatusFreeTrial() {
  return (
    <div className="p-4 bg-blue-600/20 border border-white rounded-md">
      <h3 className="font-semibold text-xl mb-2 text-center">
        🚀 Free trial available
      </h3>
      <Badge variant="outline" className="w-full bg-blue-900 py-1">
        1 Free Interview
      </Badge>
      <p className="text-sm mt-2 text-center">Create a free interview with IA</p>
    </div>
  )
}
