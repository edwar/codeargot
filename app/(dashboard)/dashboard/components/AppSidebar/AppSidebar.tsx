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
import { BtnCreateInterview, Logo } from "@/components/shared"
import { AccessStatus } from "./AccessStatus"


export function AppSidebar() {
  return (
    <Sidebar className="text-white">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <BtnCreateInterview />
        </SidebarGroup>
      <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild size="lg">
                    <a href={item.url}>
                      <item.icon className="w-10 h-10 shrink-0 !text-3xl"/>
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