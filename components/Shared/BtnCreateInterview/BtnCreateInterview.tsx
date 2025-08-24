import { Headset, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FormCreateInterview } from "./FormCreateInterview"

export function BtnCreateInterview() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors duration-300 cursor-pointer">
          Create new Interview <Zap className="w-6 h-6 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex gap-2 items-center text-purple-400">
            Start Interview
            <Headset className="w-6 h-6 mr-2" />
          </DialogTitle>

        </DialogHeader>
        <FormCreateInterview />
      </DialogContent>
    </Dialog>
  )
}
