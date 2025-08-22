import { Metadata } from "next";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./components";
import { SignedIn, UserButton } from "@clerk/nextjs";

export const metadata: Metadata = {
    title: "Dashboard | CodeArgot",
    description: "Dashboard for users to practice their interview skills",
}

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full min-h-screen p-6">
          <div className="flex justify-between">
            <SidebarTrigger className="text-white" />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {children}
        </main>
      </SidebarProvider>
    </div>
  )
}
