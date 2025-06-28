const Forbidden = require("../../errors/ForbiddenError");
const TransactionService = require("./transaction.service");

class TransactionController {
  async getAll(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10; // limit, bukan page lagi
      const search = req.query.search || "";

      const result = await TransactionService.getAllByUser(req.userId, page, limit, search); // tutup di sini

      res.json({
        success: true,
        message: "Daftar transaksi kamu",
        data: result.data,
        pagination: result.pagination,
      });
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const transaction = await TransactionService.getById(req.params.id);
      if (!transaction.user_id !== req.userId) {
        return Forbidden("Kamu tidak bisa Akses transaksi ini");
      }
      res.status(200).json({ success: true, message: "transaksi ditemukan", data: transaction });
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const data = {
        ...req.body,
        user_id: req.userId,
      };
      const transaction = await TransactionService.create(data);
      res.status(201).json({ success: true, message: "transaksi berhasil terbuat", data: transaction });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const transaction = await TransactionService.getById(req.params.id);
      if (!transaction.user_id !== req.userId) {
        throw new Forbidden("Kamu tidak bisa Akses transaksi ini");
      }

      const data = { ...req.body };
      delete data.user_id;

      await TransactionService.update(req.params.id, data);
      res.status(200).json({ success: true, message: "transaksi berhasil diupdate" });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await TransactionService.delete(req.params.id);
      res.status(200).json({ success: true, message: "transaksi berhasil dihapus" });
    } catch (error) {
      next(error);
    }
  }

  async getMonthlySummary(req, res, next) {
    try {
      const data = await TransactionService.getMonthlySummary(req.userId);
      res.status(200).json({ success: true, message: "summary data berhasil diambil", data });
    } catch (error) {
      next(error);
    }
  }

  async getMonthlyChart(req, res, next) {
    try {
      const data = await TransactionService.getMonthlyChart(req.userId);
      res.status(200).json({ success: true, message: "chart data berhasil diambil", data });
    } catch (error) {
      next(error);
    }
  }

  async getTodayTransaction(req, res, next) {
    try {
      const data = await TransactionService.getTodayTransactions(req.userId);
      res.status(200).json({ success: true, message: "data transaksi hari ini berhasil diambil", data });
    } catch (error) {
      next(error);
    }
  }

  async getTodayExpense(req, res, next) {
    try {
      const data = await TransactionService.getTodayExpenseStats(req.userId);
      res.status(200).json({ success: true, message: "data pengeluaran hari ini berhasil diambil", data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TransactionController();
