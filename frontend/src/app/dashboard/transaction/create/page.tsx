import TransactionForm from "@/pages/TransactionForm";

// ini page nya
export default function CreateTransactionPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Buat Transaksi Baru</h1>
      <TransactionForm initialData={{ type: "income", amount: "20000", date: "20-06-2025", note: "test", categoryId: 1 }} onSubmit={() => console.log("submit")} />
    </div>
  );
}
