export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function copy<T = unknown>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}
