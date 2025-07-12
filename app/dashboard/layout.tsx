import Sidebar from "@/components/common/dashboard/sidebar";
import TopNavbar from "@/components/common/dashboard/topnavbar";

const DashboardLayout=({ children }: { children: React.ReactNode })=> {
  return (
    <div className="flex h-screen w-full bg-[#0f0f0f] text-white">
      <Sidebar />

      <div className="flex-1 ml-0 md:ml-45 flex flex-col">
        <TopNavbar />

        <main className="flex-1 px-4 md:px-6 py-4">
          {children}
        </main>
      </div>
    </div>
  )
}
export default  DashboardLayout
