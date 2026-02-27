export function register() {
  // No-op — required by Next.js instrumentation API
}

export const onRequestError = async (
  err: Error,
  request: { headers: { cookie?: string | string[] } },
) => {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { getPostHogServer } = await import("@/lib/posthog-server");
    const posthog = getPostHogServer();

    let distinctId: string | undefined;
    if (request.headers.cookie) {
      const cookieString = Array.isArray(request.headers.cookie)
        ? request.headers.cookie.join("; ")
        : request.headers.cookie;
      const postHogCookieMatch = cookieString.match(
        /ph_phc_.*?_posthog=([^;]+)/,
      );
      if (postHogCookieMatch?.[1]) {
        try {
          const decoded = decodeURIComponent(postHogCookieMatch[1]);
          const data = JSON.parse(decoded);
          distinctId = data.distinct_id;
        } catch {
          // Cookie parse failed — capture without distinctId
        }
      }
    }

    posthog.captureException(err, distinctId);
  }
};
