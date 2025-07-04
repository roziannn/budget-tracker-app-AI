import { StatCard } from "@/ui/StatCard";
import { FaPiggyBank, FaWallet, FaArrowDown, FaArrowUp } from "react-icons/fa";
import formatRupiah from "@/utils/formatRupiah";

export default function DashboardPage() {
  const dateNow = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="p-3 space-y-6">
      {/* header */}
      <div
        className="flex flex-col gap-8 text-white bg-gradient-to-r from-indigo-900
       to-indigo-600 rounded-xl p-6"
      >
        {/* top konten */}
        <div className="flex justify-between items-start flex-wrap gap-2">
          <div>
            <h2 className="text-3xl font-semibold">Welcome Back, User!</h2>
            <p className="text-md mt-1 font-normal">Insights at a glace: empowering your financial journey.</p>
          </div>
          <div className="text-right text-medium text-white">
            <p className="font-medium">{dateNow}</p>
          </div>
        </div>
        {/* start konten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Balance" value={formatRupiah(19120000) || 0} icon={<FaWallet size={24} />} change="This Month" color="text-gray-600" />
          <StatCard title="Total Savings" value={formatRupiah(5400000) || 0} icon={<FaPiggyBank size={24} />} change="For Recommendation" color="text-gray-600" />
          <StatCard title="Total Income" value={formatRupiah(981000) || 0} icon={<FaArrowUp size={24} />} change="This Month" color="text-gray-600" />
          <StatCard title="Total Expense" value={formatRupiah(77000) || 0} icon={<FaArrowDown size={24} />} change="This Month" color="text-gray-600" />
        </div>
      </div>
    </div>
  );
}
