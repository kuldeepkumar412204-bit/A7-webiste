"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AlertTriangle, Loader2, Save, Trash2, X } from "lucide-react";
import "react-quill-new/dist/quill.snow.css";
import { IKhaiwal } from "@/app/types/Khaiwal";

const ReactQuill = dynamic(
    async () => {
        const { default: RQ } = await import("react-quill-new");

        const Quill = RQ.Quill;

        // Size as inline style: font-size: 16px
        const Size = Quill.import(
            "attributors/style/size"
        ) as any;

        Size.whitelist = [
            "10px",
            "12px",
            "14px",
            "16px",
            "18px",
            "20px",
            "24px",
            "32px",
        ];

        Quill.register(Size, true);

        // Fonts
        const Font = Quill.import(
            "formats/font"
        ) as any;

        Font.whitelist = [
            "sans-serif",
            "serif",
            "monospace",
            "roboto",
            "poppins",
        ];

        Quill.register(Font, true);

        return RQ;
    },
    {
        ssr: false,
        loading: () => (
            <div className="flex h-64 items-center justify-center text-sm text-gray-400">
                Loading editor...
            </div>
        ),
    }
);



interface KhaiwalFormProps {
    initialData?: IKhaiwal;
    onSuccess: (khaiwal: IKhaiwal) => void;
    onClose: () => void;
    onDelete?: (id: string) => Promise<void>; // Added onDelete prop
}

export default function KhaiwalForm({
    initialData,
    onSuccess,
    onClose,
    onDelete
}: KhaiwalFormProps) {
    const isEdit = Boolean(initialData?._id);
    const [name, setName] = useState(initialData?.name ?? "");
    const [data, setData] = useState(initialData?.data ?? "");
    const [order, setOrder] = useState(initialData?.order ?? 0)
    const [whatsappNumber, setWhatsappNumber] = useState(
        initialData?.whatsappNumber ?? ""
    );
    const [telegramLink, setTelegramLink] = useState(
        initialData?.telegramLink ?? ""
    );
    const [isActive, setIsActive] = useState(initialData?.isActive ?? true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

    useEffect(() => {
        if (initialData) {
            setName(initialData.name ?? "");
            setData(initialData.data ?? "");
            setWhatsappNumber(initialData.whatsappNumber ?? "");
            setTelegramLink(initialData.telegramLink ?? "");
            setIsActive(initialData.isActive ?? true);
            setOrder(initialData?.order?? 0 );
        } else {
            setName("");
            setData("");
            setWhatsappNumber("");
            setTelegramLink("");
            setOrder(0);
            setIsActive(true);
        }
        setError("");
    }, [initialData]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (!name.trim()) {
            setError("Name is required.");
            return;
        }

        if (!data.trim() || data === "<p><br></p>") {
            setError("Data is required.");
            return;
        }

        setLoading(true);

        try {
            const url = isEdit ? `/api/khaiwal/${initialData!._id}` : "/api/khaiwal";
            const method = isEdit ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: name.trim(),
                    data,
                    whatsappNumber: whatsappNumber.trim() || undefined,
                    telegramLink: telegramLink.trim() || undefined,
                    isActive,
                    order: Number(order)
                }),
            });

            const response = await res.json();

            if (!res.ok || !response.success) {
                throw new Error(
                    response.message ||
                    `Failed to ${isEdit ? "update" : "create"} Khaiwal`
                );
            }

            onSuccess(response.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    const modules = {
        toolbar: [
            [
                {
                    font: [
                        "sans-serif",
                        "serif",
                        "monospace",
                        "roboto",
                        "poppins",
                    ],
                },
            ],

            [
                {
                    size: [
                        "10px",
                        "12px",
                        "14px",
                        "16px",
                        "18px",
                        "20px",
                        "24px",
                        "32px",
                    ],
                },
            ],

            [{ header: [1, 2, 3, false] }],

            ["bold", "italic", "underline", "strike"],

            [{ color: [] }, { background: [] }],

            [{ list: "ordered" }, { list: "bullet" }],

            [{ align: [] }],

            ["blockquote", "code-block"],

            ["link"],

            ["clean"],
        ],
    };

    const formats = [
        "font",
        "size",
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "color",
        "background",
        "list",
        "bullet",
        "align",
        "blockquote",
        "code-block",
        "link",
    ];

    const handleDelete = async () => {
        if (!initialData?._id || !onDelete) return;
        setIsDeleting(true);
        try {
            await onDelete(initialData._id);
            onClose();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to delete record.");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative space-y-6 mx-auto p-2">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                        {isEdit ? "Edit Khaiwal" : "Add Khaiwal"}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        {isEdit
                            ? "Update the Khaiwal record details below."
                            : "Create a new Khaiwal record."}
                    </p>
                </div>
            </div>

            {showDeleteConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all">
                        {/* Icon & Message */}
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                                <AlertTriangle size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Delete Khaiwal</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Are you sure you want to delete this record? This action cannot be undone.
                                </p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="mt-6 flex items-center justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => setShowDeleteConfirm(false)}
                                disabled={isDeleting}
                                className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleDelete}
                                disabled={isDeleting}
                                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
                            >
                                {isDeleting ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        Deleting...
                                    </>
                                ) : (
                                    "Delete"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                </div>
            )}

            {/* Single-Column Stacked Layout */}
            <div className="space-y-6">
                {/* Row 1: Name & WhatsApp Number */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="khaiwal-name"
                            className="mb-1.5 block text-sm font-semibold text-gray-700"
                        >
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="khaiwal-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter name"
                            disabled={loading}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#e11d48] focus:ring-2 focus:ring-[#e11d48]/20 disabled:bg-gray-100"
                        />
                    </div>
<div>
                        <label
                            htmlFor="khaiwal-name"
                            className="mb-1.5 block text-sm font-semibold text-gray-700"
                        >
                            Order 
                        </label>
                        <input
                            id="khaiwal-name"
                            type="text"
                            value={order as any}
                            onChange={(e) => setOrder(e.target.value as any)}
                            placeholder="Enter order"
                            disabled={loading}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#e11d48] focus:ring-2 focus:ring-[#e11d48]/20 disabled:bg-gray-100"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="khaiwal-whatsapp"
                            className="mb-1.5 block text-sm font-semibold text-gray-700"
                        >
                            WhatsApp Number
                        </label>
                        <input
                            id="khaiwal-whatsapp"
                            type="text"
                            value={whatsappNumber}
                            onChange={(e) => setWhatsappNumber(e.target.value)}
                            placeholder="+91 9876543210"
                            disabled={loading}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#e11d48] focus:ring-2 focus:ring-[#e11d48]/20 disabled:bg-gray-100"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="khaiwal-telegram"
                            className="mb-1.5 block text-sm font-semibold text-gray-700"
                        >
                            Telegram Link
                        </label>
                        <input
                            id="khaiwal-telegram"
                            type="url"
                            value={telegramLink}
                            onChange={(e) => setTelegramLink(e.target.value)}
                            placeholder="https://t.me/username"
                            disabled={loading}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#e11d48] focus:ring-2 focus:ring-[#e11d48]/20 disabled:bg-gray-100"
                        />
                    </div>
                </div>

                {/* Row 2: Telegram Link & Active Toggle */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 items-end">
                    

                    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5">
                        <div>
                            <p className="text-sm font-semibold text-gray-700">Active</p>
                            <p className="text-xs text-gray-500">Enable this Khaiwal record.</p>
                        </div>
                        <button
                            type="button"
                            role="switch"
                            aria-checked={isActive}
                            onClick={() => setIsActive((prev) => !prev)}
                            disabled={loading}
                            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${isActive ? "bg-green-500" : "bg-gray-300"
                                }`}
                        >
                            <span
                                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform ${isActive ? "translate-x-5.5" : "translate-x-0.5"
                                    } mt-0.5`}
                            />
                        </button>
                    </div>
                </div>

                {/* Row 3: Full-Width Rich Text Editor */}
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Data <span className="text-red-500">*</span>
                    </label>
                    <div className="rounded-xl border border-gray-300 bg-white focus-within:border-[#e11d48] [&_.ql-editor]:min-h-[320px] [&_.ql-toolbar]:border-none [&_.ql-container]:border-none">
                        <ReactQuill
                            theme="snow"
                            value={data}
                            onChange={setData}
                            modules={modules}
                            formats={formats}
                            placeholder="Enter Khaiwal data..."
                            readOnly={loading}
                        />
                    </div>
                    <p className="mt-1.5 text-xs text-gray-400">
                        Add formatted text, fonts, colors, lists, and code blocks.
                    </p>
                </div>
            </div>

            {/* Form Actions */}
            <div className="sticky bottom-0 pb-8 bg-white flex justify-end gap-3 pt-4 border-t">
                <div>
                    {isEdit && onDelete && (
                        <button
                            type="button"
                            onClick={() => setShowDeleteConfirm(true)}
                            disabled={loading || isDeleting}
                            className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-100 disabled:opacity-50"
                        >
                            <Trash2 size={16} /> Delete Record
                        </button>
                    )}
                </div>
                <button
                    type="button"
                    onClick={onClose}
                    disabled={loading}
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-60"
                >
                    <X size={16} /> Cancel
                </button>
                <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#e11d48] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#be123c] disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {loading ? (
                        <>
                            <Loader2 size={16} className="animate-spin" />
                            {isEdit ? "Updating..." : "Creating..."}
                        </>
                    ) : (
                        <>
                            <Save size={16} /> {isEdit ? "Update" : "Create"}
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}