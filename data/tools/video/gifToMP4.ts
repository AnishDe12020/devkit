import { Tool } from "@/data/types";

const GIFToMP4: Tool = {
  id: 2,
  name: "GIF To MP4",
  description:
    "Converts a given GIF file to a MP4 video by using FFMPEG, locally",
  componentFileName: "GIFToMP4",
  slug: "gif-mp4",
  categorySlug: "video",
  acceptedDataTypes: ["gif"],
};

export default GIFToMP4;
