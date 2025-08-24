"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function StripeDialogPayment() {

  const [open, setOpen] = useState(false)

  const handleOpenChange = () => {
    setOpen(!open)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <Button className="text-white bg-purple-600 hover:bg-purple-800 cursor-pointer" variant="secondary">🚀 Unlock Unlimit interviews</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          <DialogHeader>
            <DialogTitle className="hidden">Purchase</DialogTitle>
            <div className="min-h-[600px]" />
          </DialogHeader>
        </DialogContent>
      </Dialog>
  )
}
