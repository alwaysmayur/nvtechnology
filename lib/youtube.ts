/**
 * Extracts a YouTube video ID from various URL formats.
 * Supports youtube.com/watch, youtu.be, youtube.com/embed, etc.
 */
export function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1).split("/")[0] || null;
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/embed/")) return u.pathname.split("/")[2] || null;
      if (u.pathname.startsWith("/shorts/")) return u.pathname.split("/")[2] || null;
      return u.searchParams.get("v");
    }
    return null;
  } catch {
    return null;
  }
}

/** Returns the high-quality thumbnail URL for a YouTube video. */
export function getYouTubeThumbnail(url: string, quality: "default" | "hq" | "mq" | "sd" | "maxres" = "hq"): string {
  const id = getYouTubeId(url);
  if (!id) return "";
  const qualityMap = {
    default: "default",
    hq: "hqdefault",
    mq: "mqdefault",
    sd: "sddefault",
    maxres: "maxresdefault",
  };
  return `https://img.youtube.com/vi/${id}/${qualityMap[quality]}.jpg`;
}

/** Returns the embed URL for a YouTube video. */
export function getYouTubeEmbedUrl(url: string): string {
  const id = getYouTubeId(url);
  if (!id) return "";
  return `https://www.youtube.com/embed/${id}`;
}
