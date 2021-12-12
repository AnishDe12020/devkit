import { Tool } from "@/data/types";

const ImageResizer: Tool = {
  id: 1,
  name: "Image Resizer",
  description: "Resizes images to a given value",
  componentFileName: "ImageResizer",
  slug: "image-resizer",
  categorySlug: "image",
  acceptedDataTypes: ["image"],
};

export default ImageResizer;
