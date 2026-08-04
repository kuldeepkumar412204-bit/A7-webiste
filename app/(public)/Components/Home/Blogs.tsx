"use client";

import { Blog, getBlogs } from "@/app/lib/blogs";
import { useEffect, useState } from "react";



export default function Blogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getBlogs();
                setBlogs(data);
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <section className="flex flex-col gap-6 mt-4 bg-[#080a0e]">
            <div className="w-full bg-black border-b-4 border-black py-4 text-center text-white">
                <h4 className="text-[16px] font-black uppercase tracking-widest pt-4">
                    A7 SATTA KING BLOG
                </h4>
            </div>

            <div className="w-full max-w-8xl mx-auto py-6">
                {loading ? (
                    <div className="text-center font-bold py-10">
                        Loading blogs...
                    </div>
                ) : (
                    <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                        {blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="border border-black bg-[#ffd800] flex flex-col transition-all"
                            >
                                <div className="w-full aspect-[4/3] bg-slate-500 flex items-center justify-center text-slate-800 font-extrabold border-b-2 border-black p-4 text-center">
                                    {blog.title}
                                </div>

                                <div className="p-6 mt-2 flex-grow flex flex-col gap-2 text-black">
                                    <h5 className="font-bold text-[20.8px] capitalize leading-snug pt-2 ">
                                        {blog.title}
                                    </h5>

                                    <span className="text-[12px] font-normal text-[#4b5563] capitalize">
                                        Posted on {blog.date}
                                    </span>

                                    <div className=" font-semibold text-gray-700 text-sm leading-5 capitalize tracking-tighter flex flex-wrap gap-1.5 mt-2">
                                        {blog.tags.map((tag) => (
                                            <span key={tag}>#{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </section>
    );
}