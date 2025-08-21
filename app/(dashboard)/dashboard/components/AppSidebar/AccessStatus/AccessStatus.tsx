"use client"
import { Badge } from "@/components/ui/badge";
import { StatusFreeTrial } from "./StatusFreeTrial";
import { StatusPaid } from "./StatusPaid"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { User } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button";

export function AccessStatus() {
  const [open, setOpen] = useState(false)
  const hasPaid = false;
  const statusFree = true;
  if (hasPaid) {
    return (
      <StatusPaid />
    )
  }
  if (statusFree) {
    return (
      <StatusFreeTrial />
    )
  }

  const handleOpenChange = () => {
    setOpen(!open)
  }

  return (
    <div className="p-4 border border-white bg-purple-800/20 rounded-md ">
      <h3 className="font-semibold text-xl mb-1">
        🚫 Plan no activate
      </h3>
      <Badge variant="outline" className="w-full bg-red-700 py-1">
        Limited access
      </Badge>
      <p className="text-sm mt-2 text-center mb-3">You have used your free trial</p>

      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button className="w-full font-semibold text-purple-700" variant="secondary">Unlock for 9,99 €</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <DialogHeader>
            <DialogTitle className="hidden">Purchase</DialogTitle>
            <div className="min-h-[600px]" />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
