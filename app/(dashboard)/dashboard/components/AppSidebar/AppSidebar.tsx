"use client"
import axios from "axios"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { sidebarItems } from "./AppSidebar.data"
import { BtnCreateInterview, Logo, StripeDialogPayment } from "@/components/shared"
import { AccessStatus } from "./AccessStatus"
import { useEffect, useState } from "react"


export function AppSidebar() {

  const [hasPaid, setHasPaid] = useState<boolean | null>(null)
  const [hasUsedFreeTrial, setHasUsedFreeTrial] = useState<boolean | null>(null)

  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const response = await axios.get("/api/user/status")
        setHasPaid(response.data.hasPaid)
        setHasUsedFreeTrial(response.data.hasUsedFreeTrial)
      } catch (error) {
        console.error("Failed to fetch user", error)
      }
    }
    fetchUserStatus()
  }, [])
  return (
    <Sidebar className="text-white">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {(hasPaid || !hasUsedFreeTrial) && <BtnCreateInterview />}
          {!hasPaid && hasUsedFreeTrial && <StripeDialogPayment />}
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="lg">
                    <a href={item.url}>
                      <item.icon className="w-10 h-10 shrink-0 !text-3xl" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <AccessStatus />
      </SidebarFooter>
    </Sidebar>
  )
}