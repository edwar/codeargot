"use client"
import { Badge } from "@/components/ui/badge";
import { StatusFreeTrial } from "./StatusFreeTrial";
import { StatusPaid } from "./StatusPaid"
import { useEffect, useState } from "react"
import axios from "axios";
import { StripeDialogPayment } from "@/components/shared/StripeDialogPayment"

export function AccessStatus() {
  const [hasPaid, setHasPaid] = useState<boolean | null>(null)
  const [hasUsedFreeTrial, setHasUsedFreeTrial] = useState<boolean | null>(null)
  
  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const response = await axios.get("/api/user/status")
        setHasPaid(response.data.hasPaid)
        setHasUsedFreeTrial(response.data.hasUsedFreeTrial)
      } catch(error) {
        console.error("Failed to fetch user", error)
      }
    }
    fetchUserStatus()
  }, [])
  
  if (hasPaid) {
    return (
      <StatusPaid />
    )
  }
  if (!hasUsedFreeTrial && !hasPaid) {
    return (
      <StatusFreeTrial />
    )
  }

  return (
    <div className="p-2 border border-white bg-purple-800/20 rounded-md flex flex-col items-center">
      <h3 className="font-semibold text-xl mb-1">
        🚫 Plan no activate
      </h3>
      <Badge variant="outline" className="w-full bg-red-700 py-1">
        Limited access
      </Badge>
      <p className="text-sm mt-2 text-center mb-3">You have used your free trial</p>

      <StripeDialogPayment />
    </div>
  )
}
