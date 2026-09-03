"use client";

import { useEffect, useState, useCallback, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { ISatta } from "@/app/types/Satta";
import { IResult } from "@/app/types/Results";
import { 
  PlusCircle, 
  Pencil, 
  Trash2, 
  Search, 
  RefreshCw, 
  ChevronLeft, 
  ChevronRight, 
  Calendar,
  XCircle 
} from "lucide-react";
import Link from "next/link";

function formatTime12(time24: string): string {
  if (!time24) return "-";
  const [hStr, mStr] = time24.split(":");
  let h = parseInt(hStr, 10);
  const period = h >= 12 ? "PM" : "AM";
  if (h === 0) h = 12;
  else if (h > 12) h -= 12;
  return `${h}:${mStr} ${period}`;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

interface PopulatedResult extends Omit<IResult, "sattaId"> {
  _id: string;
  sattaId: ISatta;
}

interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export default function ResultListPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const [results, setResults] = useState<PopulatedResult[]>([]);
  const [pagination, setPagination] = useState<PaginationMeta>({
    total: 0,
    page: parseInt(searchParams.get("page") || "1", 10),
    limit: 20,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
  });

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [statusFilter, setStatusFilter] = useState<string>(searchParams.get("status") || "all");
  const [sourceFilter, setSourceFilter] = useState<string>(searchParams.get("source") || "all");
  const [startDate, setStartDate] = useState<string>(searchParams.get("startDate") || "");
  const [endDate, setEndDate] = useState<string>(searchParams.get("endDate") || "");

  const [deleteTarget, setDeleteTarget] = useState<PopulatedResult | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const showToast = (type: "success" | "error", text: string) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 3500);
  };

  // Helper to sync state changes to the URL Query String
  const updateQueryParams = useCallback(
    (newParams: Record<string, string | number | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(newParams).forEach(([key, value]) => {
        if (value === null || value === "" || value === "all") {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      });

      startTransition(() => {
        router.push(`${pathname}?${params.toString()}`);
      });
    },
    [pathname, router, searchParams]
  );

  // Debounce text search input so API isn't called on every keystroke
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentSearchInUrl = searchParams.get("search") || "";
      if (search !== currentSearchInUrl) {
        updateQueryParams({ search: search.trim(), page: 1 });
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [search, searchParams, updateQueryParams]);

  // Clear all filters handler
  const handleClearFilters = () => {
    setSearch("");
    setStatusFilter("all");
    setSourceFilter("all");
    setStartDate("");
    setEndDate("");

    startTransition(() => {
      router.push(pathname);
    });
  };

  // Check if any filter is active
  const hasActiveFilters = Boolean(
    search ||
      statusFilter !== "all" ||
      sourceFilter !== "all" ||
      startDate ||
      endDate
  );

  // Server-side fetching tied to URL search parameters
  const fetchResults = useCallback(async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams();
      const page = searchParams.get("page") || "1";
      const searchQuery = searchParams.get("search");
      const status = searchParams.get("status");
      const source = searchParams.get("source");
      const start = searchParams.get("startDate");
      const end = searchParams.get("endDate");

      query.set("page", page);
      query.set("limit", "20");
      if (searchQuery) query.set("search", searchQuery);
      if (status && status !== "all") query.set("status", status);
      if (source && source !== "all") query.set("source", source);
      if (start) query.set("startDate", start);
      if (end) query.set("endDate", end);

      const res = await fetch(`/api/results?${query.toString()}`);
      const data = await res.json();

      if (data.success) {
        setResults(data.data);
        if (data.pagination) setPagination(data.pagination);
      } else {
        showToast("error", data.message || "Failed to load results");
      }
    } catch {
      showToast("error", "Failed to load results");
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/results/${deleteTarget._id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      showToast("success", "Result deleted successfully");
      fetchResults();
    } catch (err) {
      showToast("error", err instanceof Error ? err.message : "Delete failed");
    } finally {
      setDeleting(false);
      setDeleteTarget(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-20 right-4 z-50 px-4 py-3 rounded-xl shadow-lg text-sm font-medium text-white transition-all ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.text}
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Satta Results</h1>
          <p className="text-sm text-gray-500 mt-0.5">
            Manage all results — add, publish, edit, or delete entries.
          </p>
        </div>
        <Link
          href="/admin/results/new"
          className="inline-flex items-center gap-2 bg-[#e11d48] hover:bg-[#be123c] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
        >
          <PlusCircle size={16} />
          Add New Result
        </Link>
      </div>

      {/* Filters Row */}
      <div className="flex flex-wrap gap-3 items-center bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by game name or result..."
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-xl outline-none focus:border-[#e11d48] focus:ring-2 focus:ring-[#e11d48]/20"
          />
        </div>

        {/* Source / Mode Filter */}
        <select
          value={sourceFilter}
          onChange={(e) => {
            setSourceFilter(e.target.value);
            updateQueryParams({ source: e.target.value, page: 1 });
          }}
          className="py-2 px-3 text-sm border border-gray-300 rounded-xl outline-none focus:border-[#e11d48] bg-white cursor-pointer"
        >
          <option value="all">All Modes</option>
          <option value="API">API</option>
          <option value="MANUAL">Manual</option>
        </select>

        {/* Date Range Picker */}
        <div className="flex items-center gap-1.5 border border-gray-300 rounded-xl px-3 py-1.5 bg-white text-sm">
          <Calendar size={15} className="text-gray-400" />
          <input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              updateQueryParams({ startDate: e.target.value, page: 1 });
            }}
            className="outline-none text-xs text-gray-700 bg-transparent cursor-pointer"
          />
          <span className="text-gray-400 text-xs">to</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => {
              setEndDate(e.target.value);
              updateQueryParams({ endDate: e.target.value, page: 1 });
            }}
            className="outline-none text-xs text-gray-700 bg-transparent cursor-pointer"
          />
        </div>

        {/* Status Tabs */}
        <div className="flex rounded-xl border border-gray-300 overflow-hidden text-sm">
          {(["all", "draft", "published"] as const).map((s) => (
            <button
              key={s}
              onClick={() => {
                setStatusFilter(s);
                updateQueryParams({ status: s, page: 1 });
              }}
              className={`px-3 py-2 font-medium capitalize transition-colors ${
                statusFilter === s
                  ? "bg-[#1f2937] text-white"
                  : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Clear Filters Button */}
        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors border border-rose-200"
            title="Clear all active filters"
          >
            <XCircle size={15} />
            Clear
          </button>
        )}

        {/* Refresh Button */}
        <button
          onClick={fetchResults}
          className="p-2 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors text-gray-500"
          title="Refresh Data"
        >
          <RefreshCw size={16} />
        </button>
      </div>

      {/* Main Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-16 flex flex-col items-center gap-3 text-gray-400">
            <svg className="animate-spin h-8 w-8 text-[#e11d48]" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            <p className="text-sm">Loading results...</p>
          </div>
        ) : results.length === 0 ? (
          <div className="py-16 text-center text-gray-400 space-y-3">
            <p className="text-lg font-medium">No results found</p>
            <p className="text-sm text-gray-500">
              Try adjusting your filters or search query.
            </p>
            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors border border-rose-200"
              >
                <XCircle size={14} /> Clear All Filters
              </button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-left">
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Game</th>
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Draw Date</th>
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Mode</th>
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Result</th>
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">Active</th>
                  <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {results.map((r:any, idx) => {
                  const game = typeof r.sattaId === "object" ? r.sattaId : null;
                  const rowNumber = (pagination.page - 1) * pagination.limit + idx + 1;

                  return (
                    <tr key={r._id} className="hover:bg-gray-50/70 transition-colors">
                      <td className="px-5 py-4 text-gray-400 text-xs">{rowNumber}</td>
                      <td className="px-5 py-4">
                        <p className="font-semibold text-gray-800">{game?.name ?? "—"}</p>
                        <p className="text-xs text-gray-400 mt-0.5">
                          {game ? formatTime12(game.resultTime) : ""}
                        </p>
                      </td>
                      <td className="px-5 py-4 text-gray-600">
                        {formatDate(r.drawDate)}
                      </td>
                      <td className="px-5 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider font-mono ${
                            r.source === "API" || game?.source === "API"
                              ? "bg-rose-100 text-rose-700"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {r.source || game?.source || "MANUAL"}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        {r.result && r.result !== "WAIT" && r.result !== "--" ? (
                          <span className="inline-block text-2xl font-black text-[#e11d48] tracking-widest font-mono">
                            {r.result}
                          </span>
                        ) : (
                          <span className="inline-block text-sm font-semibold text-slate-400 uppercase tracking-wide">
                            {r.result === "WAIT" ? "Pending" : "--"}
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${
                            r.status === "published"
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              r.status === "published" ? "bg-green-500" : "bg-amber-500"
                            }`}
                          />
                          {r.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                            r.isActive
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              r.isActive ? "bg-green-500" : "bg-gray-400"
                            }`}
                          />
                          {r.isActive ? "Yes" : "No"}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2 justify-end">
                          <button
                            onClick={() => router.push(`/admin/results/${r._id}/edit`)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                          >
                            <Pencil size={12} /> Edit
                          </button>
                          <button
                            onClick={() => setDeleteTarget(r)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                          >
                            <Trash2 size={12} /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination Footer Controls */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-gray-200 bg-gray-50/50">
          <p className="text-xs text-gray-500">
            Showing <span className="font-semibold text-gray-700">{results.length}</span> of{" "}
            <span className="font-semibold text-gray-700">{pagination.total}</span> entries
          </p>

          <div className="flex items-center gap-2">
            <button
              disabled={!pagination.hasPrevPage || loading}
              onClick={() => updateQueryParams({ page: pagination.page - 1 })}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={14} /> Previous
            </button>
            <span className="text-xs font-semibold text-gray-600 px-2">
              Page {pagination.page} of {pagination.totalPages || 1}
            </span>
            <button
              disabled={!pagination.hasNextPage || loading}
              onClick={() => updateQueryParams({ page: pagination.page + 1 })}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                <Trash2 size={18} className="text-red-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Delete Result?</h3>
                <p className="text-xs text-gray-500">This action cannot be undone.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-sm text-gray-600 space-y-1">
              <p>
                Game: <span className="font-semibold">{(deleteTarget.sattaId as ISatta)?.name}</span>
              </p>
              <p>
                Date: <span className="font-semibold">{formatDate(deleteTarget.drawDate)}</span>
              </p>
              <p>
                Result:{" "}
                <span className="font-bold text-[#e11d48] font-mono text-lg">{deleteTarget.result}</span>
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                disabled={deleting}
                className="flex-1 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex-1 py-2.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-xl disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {deleting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Deleting...
                  </>
                ) : (
                  "Yes, Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}