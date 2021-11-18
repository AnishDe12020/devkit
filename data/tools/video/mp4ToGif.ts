import { Tool } from "@/data/types";

const MP4ToGIF: Tool = {
  id: 1,
  name: "MP4 To GIF",
  description:
    "Converts a given MP4 video file to a GIF by using FFMPEG, locally",
  componentFileName: "MP4ToGIF",
  slug: "mp4-gif",
  categorySlug: "video",
};

export default MP4ToGIF;
