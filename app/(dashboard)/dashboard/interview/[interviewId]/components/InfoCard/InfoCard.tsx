import { InfoCardProps } from "./InfoCars.types";

export function InfoCard({ name, icon: Icon, label }: InfoCardProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white/10 border border-white/20 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-3 bg-blue-600/20 border-blue-400/30 border rounded-full flex items-center">
        <Icon className="text-2xl" />
      </div>
      <p className="text-sm text-gray-300 mt-1 capitalize">{label}</p>
      <span className="text-2xl capitalize">{name}</span>
    </div>
  )
}
