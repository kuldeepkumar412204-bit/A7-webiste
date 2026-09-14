import { notFound } from "next/navigation"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function page() {
  return (
    <>

      <Navbar />
      <div className="flex h-screen w-full items-center justify-center bg-white font-sans text-black antialiased selection:bg-neutral-200">
        <div className="flex items-center justify-center">
          { }
          <h1 className="inline-block pr-6 text-2xl font-semibold leading-[49px] border-r border-black/30">
            404
          </h1>
          { }
          <div className="inline-block pl-6">
            <h2 className="text-sm font-normal leading-[49px] m-0 p-0">
              This page could not be found.
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}