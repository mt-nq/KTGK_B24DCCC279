export const short = (s: string, n: number) => (s.length <= n ? s : s.slice(0, n).trimEnd() + "…");
export const formatDate = (iso: string) => new Date(iso).toLocaleDateString();
export const todayISO = () => new Date().toISOString();
export const genId = () => (typeof crypto !== "undefined" && (crypto as any).randomUUID ? (crypto as any).randomUUID() : Math.random().toString(36).slice(2));
