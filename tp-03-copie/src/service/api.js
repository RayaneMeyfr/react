export const API_BASE = "https://dummyjson.com";

export async function fetchPost() {
    const res = await fetch(`${API_BASE}/quotes/random`);
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
}