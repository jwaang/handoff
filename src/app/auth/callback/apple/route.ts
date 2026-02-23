import { NextRequest, NextResponse } from "next/server";

function buildRedirectUrl(request: NextRequest, params: URLSearchParams): string {
  const rawHost =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const rawProto = request.headers.get("x-forwarded-proto");

  const host = rawHost?.split(",")[0]?.trim();
  const proto = rawProto?.split(",")[0]?.trim() || "https";

  const origin = host ? `${proto}://${host}` : new URL(request.url).origin;
  const qs = params.toString();
  const url = `${origin}/auth/callback/apple/complete${qs ? `?${qs}` : ""}`;

  console.log("[Apple OAuth] buildRedirectUrl debug:", {
    rawHost,
    rawProto,
    host,
    proto,
    origin,
    requestUrl: request.url,
    redirectUrl: url,
  });

  return url;
}

// Apple Sign In uses response_mode=form_post — it POSTs code/state to this route.
export async function POST(request: NextRequest) {
  const body = await request.formData();
  const code = body.get("code") as string | null;
  const state = body.get("state") as string | null;
  const error = body.get("error") as string | null;

  console.log("[Apple OAuth] POST handler hit:", {
    hasCode: !!code,
    hasState: !!state,
    hasError: !!error,
    error,
    userAgent: request.headers.get("user-agent"),
  });

  const params = new URLSearchParams();
  if (error) params.set("error", error);
  if (code) params.set("code", code);
  if (state) params.set("state", state);

  return NextResponse.redirect(buildRedirectUrl(request, params), {
    status: 302,
  });
}

// Apple may redirect here with GET on error, or a user may land here directly.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const error = searchParams.get("error");

  console.log("[Apple OAuth] GET handler hit:", {
    error,
    fullUrl: request.url,
    userAgent: request.headers.get("user-agent"),
  });

  const params = new URLSearchParams();
  params.set("error", error ?? "apple_auth_failed");

  return NextResponse.redirect(buildRedirectUrl(request, params), {
    status: 302,
  });
}
