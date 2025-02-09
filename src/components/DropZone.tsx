import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export function DropZone() {
  const [previews, setPreviews] = useState<string[]>([]); // Array to store multiple previews
  const [files, setFiles] = useState<File[]>([]); // Array to store selected files

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setFiles(acceptedFiles); // Store the selected files

    // Create preview URLs for all accepted files
    const newPreviews = acceptedFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]); // Add new previews to the array

    // You can handle multiple file uploads here
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append("files[]", file); // Append each file to FormData with the same name 'files[]'
    });

    try {
      // const response = await axios.post('https://your-api-endpoint/upload', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
      // console.log("Upload successful:", response.data);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
    multiple: true, // Enable multiple file selection
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`flex ${
          previews.length ? "" : "justify-center"
        } items-center border-2 min-h-[8.5rem] border-dashed border-[#ccc] hover:border-gray-500 transition duration-300 bg-white rounded-xl p-4 text-center shadow-lg`}
      >
        <input {...getInputProps()} />

        {!previews.length && (
          <p>Drag & drop images here, or click to select one or more</p>
        )}

        <div className="flex flex-wrap gap-2">
          {previews.map((preview, index) => (
            <div key={index} className="relative">
              <img
                src={preview}
                alt={`Preview ${index + 1}`}
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  borderRadius: "8px",
                }}
              />
              <button
                type="button"
                onClick={() => {
                  // Remove preview and file from the arrays
                  setPreviews(previews.filter((_, i) => i !== index));
                  setFiles(files.filter((_, i) => i !== index));
                }}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}