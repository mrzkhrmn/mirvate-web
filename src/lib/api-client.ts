/**
 * Typed API client abstraction for future ASP.NET Core backend integration.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string; status?: number };

export async function apiFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<ApiResult<T>> {
  if (!API_BASE_URL) {
    return { ok: false, error: "API base URL is not configured" };
  }

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init?.headers,
      },
    });

    if (!response.ok) {
      const message = await response.text().catch(() => "Request failed");
      return { ok: false, error: message || "Request failed", status: response.status };
    }

    const data = (await response.json()) as T;
    return { ok: true, data };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Network error",
    };
  }
}
