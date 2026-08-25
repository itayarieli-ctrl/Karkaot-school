import type { NextConfig } from "next";

// The two products live on one app as two routes: "/" (course) and "/consult".
// In production each gets its own subdomain of ishadama.co.il:
//   course.ishadama.co.il   -> "/" already serves the course page (no rewrite)
//   consult.ishadama.co.il  -> its root must serve the CONSULT page
// The rewrite below makes that happen, scoped to the consult host only, so
// karkaot-school.vercel.app and the course subdomain are unaffected. Until the
// consult subdomain's DNS points here, no request carries that host and this is
// inert.
const CONSULT_HOST = process.env.CONSULT_HOST || "consult.ishadama.co.il";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: CONSULT_HOST }],
        destination: "/consult",
      },
    ];
  },
};

export default nextConfig;
