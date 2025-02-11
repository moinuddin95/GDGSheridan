import Compressor from "compressorjs";

const readFileAsDataURL = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    new Compressor(file, {
      quality: 0.6,
      success(compressedFile) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          const result = e.target?.result;
          if (result && typeof result === "string") {
            resolve(result.split(",")[1] ?? "");
          } else {
            reject(new Error("Failed to read file"));
          }
        };
        reader.onerror = (error: ProgressEvent<FileReader>) => reject(error);
        reader.readAsDataURL(compressedFile);
      },
      error(err: Error) {
        reject(err);
      },
    });
  });
};

export default readFileAsDataURL;
