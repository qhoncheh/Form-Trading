import { useState } from "react";

export function FileInput() {
  const [preview, setPreview] = useState<string | null>(null);
  //Both states are Typed for Strings but the bottom one doesnt expects null
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the selected file
    if (file) {
      const previewUrl = URL.createObjectURL(file); // Create a preview URL
      setPreview(previewUrl);
      setFileName(file.name);
    }
  };

  return (
    <div className="flex gap-5 items-center justify-start p-0 bg-white border border-[#ccc] rounded shadow-lg">
      {/* File Input */}
      <label className="cursor-pointer bg-indigo-950 text-white px-6 py-2 rounded hover:bg-indigo-900 transition duration-300">
        <span className="font-bold">Choose a file</span>
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          accept="image/*" // Accept only image files
        />
      </label>

      {preview && (
        <span className="text-sm/tight text-gray-500">{fileName}</span>
      )}

      {/* Instructions */}
      {!preview && (
        <p className="text-sm/tight text-gray-500">
          Choose an image to upload
        </p>
      )}
    </div>
  );
}