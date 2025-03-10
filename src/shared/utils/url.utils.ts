export function buildQueryString(params: Record<string, any>): string {
  const validParams = Object.entries(params)
    .filter(([_, value]) => value !== null && value !== undefined)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  return validParams ? `?${validParams}` : '';
}
