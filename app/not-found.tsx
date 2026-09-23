import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import NotFoundContent from "./components/NotFoundContent"

/**
 * Root 404, used for URLs that match no route at all (e.g. /foo/bar).
 *
 * The root layout renders no chrome, so it is added here. Pages inside the
 * `(public)` group hit `app/(public)/not-found.tsx` instead, which omits it.
 */
export default function NotFound() {
  return (
    <>
      <Navbar />
      <NotFoundContent />
      <Footer />
    </>
  )
}
