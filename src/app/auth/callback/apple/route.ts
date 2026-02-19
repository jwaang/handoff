import { NextRequest, NextResponse } from "next/server";

// Apple Sign In uses response_mode=form_post — it POSTs code/state to this route.
// We convert the POST into a GET redirect to the /complete page, which the
// existing client-side CallbackHandler can process via useSearchParams().
export async function POST(request: NextRequest) {
  const body = await request.formData();
  const code = body.get("code") as string | null;
  const state = body.get("state") as string | null;
  const error = body.get("error") as string | null;

  const params = new URLSearchParams();
  if (error) params.set("error", error);
  if (code) params.set("code", code);
  if (state) params.set("state", state);

  // Build redirect URL from request.url, but force http:// on localhost.
  // ngrok sets X-Forwarded-Proto: https which Next.js reflects in request.url,
  // causing https://localhost which isn't valid.
  const base = new URL(request.url);
  if (base.hostname === "localhost") base.protocol = "http:";
  base.pathname = "/auth/callback/apple/complete";
  base.search = params.toString();

  return NextResponse.redirect(base.toString(), { status: 302 });
}
