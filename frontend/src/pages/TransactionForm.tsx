import React from "react";
import { TransaksiProps } from "@/interfaces";

const TransactionForm: React.FC<TransaksiProps> = ({ initialData, onSubmit }) => {
  return (
    <form action="" className="space-y-4 w-xl">
      <div className="">
        <label htmlFor="tipe" className="block mb-1 text-sm">
          Tipe
        </label>
        <select name="type" value="" className="w-full border px-3 py-2 rounded" required>
          <option value="income">Pemasukan</option>
          <option value="expense">Pengeluaran</option>
        </select>
      </div>
      <div className="">
        <label htmlFor="jumlah" className="block mb-1 text-sm">
          Jumlah
        </label>
        <input type="text" name="amount" value="" className="w-full border px-3 py-2 rounded" placeholder="Contoh: Rp. 10.000" required />
      </div>
      <div className="">
        <label htmlFor="tanggal" className="block mb-1 text-sm">
          Tanggal
        </label>
        <input type="date" name="date" value="" className="w-full border px-3 py-2 rounded" required />
      </div>
      <div className="">
        <label htmlFor="catatan" className="block mb-1 text-sm">
          Catatan
        </label>
        <input type="text" name="note" value="" className="w-full border px-3 py-2 rounded" required />
      </div>

      <div className="">
        <label htmlFor="catatan" className="block mb-1 text-sm">
          Kategori
        </label>
        <select name="categoryId" value="" className="w-full border px-3 py-2 rounded" required>
          <option value="">---- Pilih kategori ----</option>
          <option value="transport">Transportasi</option>
        </select>
      </div>

      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Simpan
      </button>
    </form>
  );
};

export default TransactionForm;
