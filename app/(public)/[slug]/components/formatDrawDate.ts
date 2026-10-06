// drawDate is the IST date stored at 00:00Z, e.g. "6 October 2026"
export const formatDrawDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-IN", {
        timeZone: "UTC",
        day: "numeric",
        month: "long",
        year: "numeric",
    });
