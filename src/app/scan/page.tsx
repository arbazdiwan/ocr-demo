"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface OCRResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: {
    pan_number?: string;
    name?: string;
    dob?: string;
    father_name?: string;
    // Add other expected fields from your OCR response
  };
}

export default function ScanPage() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = e.target.files?.[0];

    if (!file) return;

    // Validation checks
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      // 5MB limit
      setError("Image size should be less than 5MB");
      return;
    }

    setSelectedImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      setError("Please select an image first");
      return;
    }

    const OCR_BACKEND_URL = process.env.NEXT_PUBLIC_OCR_BACKEND_URL;

    if (!OCR_BACKEND_URL) {
      setError("Server URL is not configured");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("image", selectedImage);
      const requestUrl = `${OCR_BACKEND_URL}/ocr`;

      const response = await fetch(requestUrl, {
        method: "POST",
        body: formData,
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        // Try to get error message from response if possible
        try {
          const errorData = await response.json();
          throw new Error(
            errorData.error || `HTTP error! status: ${response.status}`
          );
        } catch (e: unknown) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }

      console.log("response", response);

      // Check if status is 200 or 201
      if (![200, 201].includes(response.status)) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const result: OCRResponse = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Failed to process image");
      }

      console.log("result", result?.data);

      // Only redirect if we got here (successful response)
      router.push("/list");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload image");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
    setError(null);
    // Reset the file input
    const fileInput = document.getElementById("imageInput") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">PAN Card Scanner</h1>

      <div className="space-y-6">
        {/* Upload Section */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="hidden"
            id="imageInput"
            capture="environment"
            multiple={false}
          />

          {!previewUrl ? (
            <label htmlFor="imageInput" className="block cursor-pointer mb-4">
              <div className="flex flex-col items-center space-y-2">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span className="text-gray-600">
                  Click to upload or capture PAN card image
                </span>
              </div>
            </label>
          ) : (
            <div className="relative">
              {/* Clear button */}
              <button
                onClick={handleClear}
                className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 z-10"
                title="Clear image"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Preview Section */}
              <div className="mt-4">
                <Image
                  src={previewUrl}
                  alt="Selected PAN card"
                  width={300}
                  height={200}
                  className="mx-auto rounded-lg"
                  objectFit="contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && <div className="text-red-500 text-center">{error}</div>}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={!selectedImage || loading}
          className={`w-full py-2 px-4 rounded-lg ${
            !selectedImage || loading
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {loading ? "Processing..." : "Upload and Scan"}
        </button>
      </div>
    </div>
  );
}
