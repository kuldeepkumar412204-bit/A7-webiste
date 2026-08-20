"use client";

import { useEffect, useMemo, useState } from "react";
import {
    PlusCircle,
    Pencil,
    Trash2,
    Search,
    RefreshCw,
    X,
    Eye,
} from "lucide-react";
import KhaiwalForm from "@/app/admin/components/KhaiwalForm";
import { IKhaiwal } from "@/app/types/Khaiwal";

export default function KhaiwalListPage() {
    const [khaiwals, setKhaiwals] = useState<IKhaiwal[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const [toast, setToast] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalKhaiwal, setModalKhaiwal] = useState<IKhaiwal | null>(null);
    const [viewKhaiwal, setViewKhaiwal] = useState<IKhaiwal | null>(null);

    const showToast = (
        type: "success" | "error",
        text: string
    ) => {
        setToast({ type, text });

        setTimeout(() => {
            setToast(null);
        }, 3500);
    };

    const fetchKhaiwals = async () => {
        setLoading(true);

        try {
            const res = await fetch("/api/khaiwal");
            const data = await res.json();

            if (res.ok && data.success) {
                setKhaiwals(data.data);
            } else {
                throw new Error(
                    data.message || "Failed to fetch khaiwal records"
                );
            }
        } catch (error) {
            showToast(
                "error",
                error instanceof Error
                    ? error.message
                    : "Failed to load khaiwal records"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchKhaiwals();
    }, []);

    const openAddModal = () => {
        setModalKhaiwal(null);
        setIsModalOpen(true);
    };

    const openEditModal = (khaiwal: IKhaiwal) => {
        setModalKhaiwal(khaiwal);
        setIsModalOpen(true);
    };

    const openViewModal = (khaiwal: IKhaiwal) => {
        setViewKhaiwal(khaiwal);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalKhaiwal(null);
    };

    const closeViewModal = () => {
        setViewKhaiwal(null);
    };

    const handleModalSuccess = (khaiwal: IKhaiwal) => {
        if (modalKhaiwal) {
            setKhaiwals((prev) =>
                prev.map((item) =>
                    item._id === khaiwal._id ? khaiwal : item
                )
            );

            showToast(
                "success",
                "Khaiwal updated successfully"
            );
        } else {
            setKhaiwals((prev) => [khaiwal, ...prev]);

            showToast(
                "success",
                "Khaiwal added successfully"
            );
        }

        closeModal();
    };

    const filteredKhaiwals = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) return khaiwals;

        return khaiwals.filter((khaiwal) => {
            return [
                khaiwal.name,
                khaiwal.data,
                khaiwal.whatsappNumber ?? "",
                khaiwal.telegramLink ?? "",
                khaiwal._id,
                khaiwal.order !== undefined && khaiwal.order !== null
                    ? String(khaiwal.order)
                    : "",
            ].some((value) => value?.toString().toLowerCase().includes(query));
        });
    }, [khaiwals, search]);

    const handleDelete = async (id: string) => {

        setDeletingId(id);

        try {
            const res = await fetch(`/api/khaiwal/${id}`, {
                method: "DELETE",
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(
                    data.message || "Delete failed"
                );
            }

            setKhaiwals((prev) =>
                prev.filter((khaiwal) => khaiwal._id !== id)
            );

            showToast(
                "success",
                "Khaiwal deleted successfully"
            );
        } catch (error) {
            showToast(
                "error",
                error instanceof Error
                    ? error.message
                    : "Failed to delete Khaiwal"
            );
        } finally {
            setDeletingId(null);
        }
    };

    const handleToggleActive = async (khaiwal: IKhaiwal) => {
        try {
            const res = await fetch(`/api/khaiwal/${khaiwal._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isActive: !khaiwal.isActive }),
            });
            const response = await res.json();
            if (res.ok && response.success) {
                // Refresh or update local state list
                fetchKhaiwals();
            }
        } catch (err) {
            console.error("Failed to toggle status", err);
        }
    };

    return (
        <div className="space-y-6">
            {/* Toast */}
            {toast && (
                <div
                    className={`fixed top-20 right-4 z-50 px-4 py-3 rounded-xl shadow-lg text-sm font-medium text-white ${toast.type === "success"
                        ? "bg-green-600"
                        : "bg-red-600"
                        }`}
                >
                    {toast.text}
                </div>
            )}

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Khaiwal Details
                    </h1>

                    <p className="text-sm text-gray-500 mt-1">
                        Manage Khaiwal records, data and contact details.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={openAddModal}
                    className="inline-flex items-center gap-2 bg-[#e11d48] hover:bg-[#be123c] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                    <PlusCircle size={16} />
                    Add Khaiwal
                </button>
            </div>

            {/* Search */}
            <div className="flex gap-3 flex-wrap items-center">
                <div className="relative flex-1 min-w-55 max-w-md">
                    <Search
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="search"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        placeholder="Search by name, data, whatsapp, telegram, or ID"
                        className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-xl outline-none focus:border-[#e11d48] focus:ring-2 focus:ring-[#e11d48]/20"
                    />
                </div>

                <button
                    type="button"
                    onClick={fetchKhaiwals}
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                    title="Refresh"
                >
                    <RefreshCw size={16} className="mr-2" />
                    Refresh
                </button>
            </div>

            {/* Stats */}
            <div className="flex gap-3 flex-wrap">
                <div className="bg-white rounded-xl border border-gray-200 px-4 py-3 text-sm">
                    <span className="text-gray-500">
                        Total records
                    </span>{" "}
                    <span className="font-semibold text-gray-800">
                        {khaiwals.length}
                    </span>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 px-4 py-3 text-sm">
                    <span className="text-gray-500">
                        Visible
                    </span>{" "}
                    <span className="font-semibold text-gray-800">
                        {filteredKhaiwals.length}
                    </span>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 px-4 py-3 text-sm">
                    <span className="text-gray-500">
                        Active
                    </span>{" "}
                    <span className="font-semibold text-green-600">
                        {khaiwals.filter(
                            (item) => item.isActive
                        ).length}
                    </span>
                </div>
            </div>



            {/* Table */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                {loading ? (
                    <div className="py-16 flex flex-col items-center gap-3 text-gray-400">
                        <svg
                            className="animate-spin h-8 w-8 text-[#e11d48]"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />

                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8z"
                            />
                        </svg>

                        <p className="text-sm">
                            Loading Khaiwal records...
                        </p>
                    </div>
                ) : filteredKhaiwals.length === 0 ? (
                    <div className="py-16 text-center text-gray-400">
                        <p className="text-lg font-medium">
                            No Khaiwal records found
                        </p>

                        <p className="text-sm mt-1">
                            Use the button above to add a new
                            Khaiwal record.
                        </p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        #
                                    </th>

                                    <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    {/* 
                                    <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Data
                                    </th> */}

                                    <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        WhatsApp
                                    </th>

                                    <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Telegram
                                    </th>

                                    <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Order
                                    </th>

                                    <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        Active
                                    </th>

                                    <th className="px-5 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100">
                                {filteredKhaiwals.map(
                                    (khaiwal, index) => (
                                        <tr
                                            key={khaiwal._id}
                                            className="hover:bg-gray-50/70 transition-colors"
                                        >
                                            <td className="px-5 py-4 text-gray-400 text-xs">
                                                {index + 1}
                                            </td>

                                            <td className="px-5 py-4 font-semibold text-gray-800">
                                                {khaiwal.name}
                                            </td>

                                            {/* <td className="px-5 py-4 max-w-md">
                                                <div className="max-w-md truncate text-gray-600">
                                                    {khaiwal.data || "—"}
                                                </div>
                                            </td> */}

                                            <td className="px-5 py-4 text-gray-600">
                                                {khaiwal.whatsappNumber ||
                                                    "—"}
                                            </td>

                                            <td className="px-5 py-4 text-gray-600 break-all">
                                                {khaiwal.telegramLink ||
                                                    "—"}
                                            </td>

                                            <td className="px-5 py-4 text-gray-600 break-all">
                                                {khaiwal.order ||
                                                    "—"}
                                            </td>

                                            <td className="px-5 py-4">
                                                <span
                                                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${khaiwal.isActive
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-gray-100 text-gray-500"
                                                        }`}
                                                >
                                                    <span
                                                        className={`h-1.5 w-1.5 rounded-full ${khaiwal.isActive
                                                            ? "bg-green-500"
                                                            : "bg-gray-400"
                                                            }`}
                                                    />

                                                    {khaiwal.isActive
                                                        ? "Active"
                                                        : "Inactive"}
                                                </span>
                                            </td>

                                            <td className="px-5 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    {/* View */}
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            openViewModal(
                                                                khaiwal
                                                            )
                                                        }
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                                                    >
                                                        <Eye size={12} />
                                                        View
                                                    </button>

                                                    {/* Edit */}
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            openEditModal(
                                                                khaiwal
                                                            )
                                                        }
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                                                    >
                                                        <Pencil size={12} />
                                                        Edit
                                                    </button>

                                                    {/* Delete */}
                                                    {/* <button
                                                        type="button"
                                                        onClick={() =>
                                                            handleDelete(
                                                                khaiwal._id
                                                            )
                                                        }
                                                        disabled={
                                                            deletingId ===
                                                            khaiwal._id
                                                        }
                                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors disabled:opacity-60"
                                                    >
                                                        <Trash2 size={12} />
                                                        Delete
                                                    </button> */}
                                                    <button
                                                        onClick={() => handleToggleActive(khaiwal)}
                                                        className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition ${khaiwal.isActive
                                                                ? "border border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100"
                                                                : "border border-green-200 bg-green-50 text-green-700 hover:bg-green-100"
                                                            }`}
                                                    >
                                                        {khaiwal.isActive ? "Deactivate" : "Activate"}
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            {/* Add/Edit Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-black/40">
                    <div className="relative w-full max-w-4xl overflow-hidden  rounded-3xl bg-white shadow-2xl">
                        <div className="overflow-auto scrollbar-thin max-h-[90dvh]">
                            <button
                                type="button"
                                onClick={closeModal}
                                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:bg-gray-50"
                                aria-label="Close modal"
                            >
                                <X size={20} />
                            </button>

                            <div className="p-6">
                                <KhaiwalForm
                                    key={
                                        modalKhaiwal?._id ??
                                        "new-khaiwal"
                                    }
                                    initialData={
                                        modalKhaiwal ?? undefined
                                    }
                                    onSuccess={handleModalSuccess}
                                    onClose={closeModal}

                                    onDelete={handleDelete}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {/* View Modal */}
            {viewKhaiwal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-white shadow-2xl overflow-hidden">

                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-gray-100 p-6 pb-4">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Khaiwal Details</h2>
                                <p className="mt-1 text-sm text-gray-500">View full Khaiwal information.</p>
                            </div>
                            <button
                                type="button"
                                onClick={closeViewModal}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:bg-gray-50 focus:outline-none"
                                aria-label="Close details"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Scrollable Body */}
                        <div className="overflow-y-auto p-6 space-y-6">
                            {/* Top Details Grid */}
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {/* Name */}
                                <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Name
                                    </p>
                                    <p className="mt-1.5 text-sm font-semibold text-gray-900">
                                        {viewKhaiwal.name}
                                    </p>
                                </div>

                                {/* WhatsApp */}
                                <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        WhatsApp
                                    </p>
                                    <p className="mt-1.5 text-sm font-semibold text-gray-900">
                                        {viewKhaiwal.whatsappNumber || "—"}
                                    </p>
                                </div>

                                {/* Telegram */}
                                <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Telegram
                                    </p>
                                    <p className="mt-1.5 text-sm font-semibold text-gray-900 break-all">
                                        {viewKhaiwal.telegramLink || "—"}
                                    </p>
                                </div>

                                {/* Status */}
                                <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Status
                                    </p>
                                    <div className="mt-1.5">
                                        <span
                                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${viewKhaiwal.isActive
                                                ? "bg-green-100 text-green-700"
                                                : "bg-gray-200 text-gray-600"
                                                }`}
                                        >
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full ${viewKhaiwal.isActive ? "bg-green-500" : "bg-gray-400"
                                                    }`}
                                            />
                                            {viewKhaiwal.isActive ? "Active" : "Inactive"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Rendered Rich Text Content */}
                            <div className="rounded-2xl border border-gray-200 bg-gray-50/70 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                                    Data Content
                                </p>
                                <div className="min-h-[160px] max-h-96 overflow-y-auto rounded-xl border border-gray-200 bg-white p-4 shadow-inner">
                                    {viewKhaiwal.data ? (
                                        <div
                                            className="ql-editor !p-0"
                                            dangerouslySetInnerHTML={{ __html: viewKhaiwal.data }}
                                        />
                                    ) : (
                                        <p className="text-sm text-gray-400 italic">No content available.</p>
                                    )}
                                </div>
                            </div>

                            {/* Technical ID (Footer position) */}
                            <div className="text-right text-xs text-gray-400">
                                ID: <code className="font-mono">{viewKhaiwal._id}</code>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}