import Resizer from "react-image-file-resizer";

export const resizer = (
  file: File,
  maxWidth: number,
  maxHeight: number,
  quality: number,
  name: string
) => {
  return new Promise<Blob>((resolve, reject) => {
    Resizer.imageFileResizer(
      file,
      maxWidth,
      maxHeight,
      "WEBP",
      quality,
      0,
      (uri) => {
        if (uri instanceof Blob) {
          const image = new File([uri], name, { type: uri.type });
          resolve(image);
        } else {
          reject("Error resizing image");
        }
      },
      "blob"
    );
  });
};
