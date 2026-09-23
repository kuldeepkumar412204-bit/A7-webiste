import NotFoundContent from "../components/NotFoundContent";

/**
 * 404 boundary for the `(public)` route group.
 *
 * Navbar and Footer come from `(public)/layout.tsx`, so this renders the body
 * only — rendering them again here is what produced the duplicated header.
 */
export default function NotFound() {
  return <NotFoundContent />;
}
