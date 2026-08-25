// Canonical URL for each product page.
//
// Locally and on karkaot-school.vercel.app the two pages are just paths on one
// host, so these default to relative "/" and "/consult" — identical to today.
// In production each product has its own subdomain, so links that cross from
// one product to the other must be ABSOLUTE (otherwise, e.g., a "back to the
// course" link on the consult subdomain would resolve to that subdomain's root,
// which is rewritten back to the consult page — a loop).
//
// Set these env vars once the subdomains exist; until then everything stays
// relative and unchanged. NEXT_PUBLIC_ so client components can read them too.
export const COURSE_URL = process.env.NEXT_PUBLIC_COURSE_URL || "/";
export const CONSULT_URL = process.env.NEXT_PUBLIC_CONSULT_URL || "/consult";

// A path within the course page (e.g. "#syllabus"): absolute when a course
// subdomain is configured, relative otherwise.
export function courseAnchor(hash: string): string {
  return COURSE_URL === "/" ? `/${hash}` : `${COURSE_URL}${hash}`;
}
