import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Gate /admin pages and the /api/admin/* routes behind HTTP Basic Auth.
// Browsers handle the credential prompt natively — no custom login page.
// Credentials come from env vars; if either is missing the routes return
// 503 so a misconfigured deploy can't accidentally be unauthenticated.
export function middleware(req: NextRequest) {
  const expectedUser = process.env.ADMIN_USERNAME || "admin";
  const expectedPass = process.env.ADMIN_PASSWORD;

  if (!expectedPass) {
    return new NextResponse("Admin not configured (set ADMIN_PASSWORD).", {
      status: 503,
    });
  }

  const auth = req.headers.get("authorization");
  if (!auth) {
    return new NextResponse("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="עורך תוכן"' },
    });
  }

  const [scheme, credentials] = auth.split(" ");
  if (scheme !== "Basic" || !credentials) {
    return new NextResponse("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="עורך תוכן"' },
    });
  }

  let decoded: string;
  try {
    decoded = atob(credentials);
  } catch {
    return new NextResponse("Bad credentials encoding", { status: 401 });
  }

  const idx = decoded.indexOf(":");
  if (idx < 0) {
    return new NextResponse("Bad credentials", { status: 401 });
  }
  const user = decoded.slice(0, idx);
  const pass = decoded.slice(idx + 1);

  if (user !== expectedUser || pass !== expectedPass) {
    return new NextResponse("Wrong credentials", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="עורך תוכן"' },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
