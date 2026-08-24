import { NextResponse } from "next/server";

// Commits the submitted JSON payload to content/copy.json on GitHub.
// Vercel watches the branch and auto-redeploys on push, so a successful
// commit here = a publish within ~90s.

const OWNER = process.env.GITHUB_REPO_OWNER || "itayarieli-ctrl";
const REPO = process.env.GITHUB_REPO_NAME || "Karkaot-school";
const BRANCH = process.env.GITHUB_BRANCH || "claude/connect-google-drive-D4wfP";
const FILE_PATH = process.env.CONTENT_PATH || "content/copy.json";
const TOKEN = process.env.GITHUB_TOKEN;

const GH_API = "https://api.github.com";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!TOKEN) {
    return NextResponse.json(
      {
        error:
          "GITHUB_TOKEN env var not set. The admin can't publish without it. " +
          "Create a fine-grained PAT scoped to this repo with 'Contents: read & write', " +
          "then add it to Vercel env vars as GITHUB_TOKEN.",
      },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "גוף הבקשה לא תקין" }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { error: "התוכן חייב להיות אובייקט (object)" },
      { status: 400 }
    );
  }

  // Serialize with stable, readable indentation (matches the file's existing
  // format so diffs stay clean).
  const newContentStr = JSON.stringify(body, null, 2) + "\n";

  // Step 1: fetch current file SHA — required by GitHub for an update commit.
  const getUrl = `${GH_API}/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(
    FILE_PATH
  )}?ref=${encodeURIComponent(BRANCH)}`;
  const getRes = await fetch(getUrl, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    cache: "no-store",
  });

  if (!getRes.ok) {
    const text = await getRes.text();
    return NextResponse.json(
      {
        error: `Failed to read current file from GitHub: HTTP ${getRes.status}. ${text}`,
      },
      { status: 502 }
    );
  }

  const current = (await getRes.json()) as { sha?: string };
  if (!current.sha) {
    return NextResponse.json(
      { error: "GitHub response missing file SHA" },
      { status: 502 }
    );
  }

  // Step 2: PUT the new content. Use Buffer for proper UTF-8 base64.
  const putUrl = `${GH_API}/repos/${OWNER}/${REPO}/contents/${encodeURIComponent(
    FILE_PATH
  )}`;
  const message =
    "admin: update copy.json via editor (" + new Date().toISOString() + ")";
  const putRes = await fetch(putUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      content: Buffer.from(newContentStr, "utf-8").toString("base64"),
      sha: current.sha,
      branch: BRANCH,
    }),
  });

  if (!putRes.ok) {
    const text = await putRes.text();
    return NextResponse.json(
      {
        error: `GitHub commit failed: HTTP ${putRes.status}. ${text}`,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "פורסם! Vercel ייצור גרסה חדשה של האתר תוך כ-60-90 שניות.",
  });
}
