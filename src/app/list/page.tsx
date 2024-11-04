"use client";
import { formatDistanceToNow } from "date-fns";
import { useState, useEffect } from "react";
import OCRDetailsModal from "@/components/OCRDetailsModal";

interface OCRData {
  fullName?: string;
  fatherName?: string;
  dateOfBirth?: string;
  panNumber?: string;
  documentName?: string;
  issuingAuthority?: string;
  confidence?: {
    panNumber: string;
    fullName: string;
    fatherName: string;
    dateOfBirth: string;
  };
}

interface OCRRequest {
  id: string;
  fileName: string;
  createdAt: {
    _seconds: number;
    _nanoseconds: number;
  };
  completedAt: {
    _seconds: number;
    _nanoseconds: number;
  };
  ocrData: {
    success: boolean;
    data: OCRData;
  };
  status: string;
}

export default function ListPage() {
  const [requests, setRequests] = useState<OCRRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<OCRRequest | null>(
    null
  );
  const [pollDelay, setPollDelay] = useState(5000);
  const [isPolling, setIsPolling] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    async function fetchRequests() {
      if (isPolling) return;

      setIsPolling(true);
      try {
        const ocrBackendUrl = process.env.NEXT_PUBLIC_OCR_BACKEND_URL;
        const response = await fetch(`${ocrBackendUrl}/ocr/requests`, {
          cache: "no-store",
        });
        const data = await response.json();
        setRequests(data.data);

        setPollDelay((prevDelay) => Math.min(prevDelay + 2000, 20000));
      } catch (error) {
        console.error("Failed to fetch requests:", error);
      } finally {
        setIsPolling(false);
        timeoutId = setTimeout(fetchRequests, pollDelay);
      }
    }

    fetchRequests();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">OCR Requests</h1>

      <div className="divide-y divide-gray-200">
        {requests.map((request) => (
          <div
            key={request.id}
            onClick={() => setSelectedRequest(request)}
            className="py-4 hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {(request.status === "PENDING" ||
                  request.status === "IN_PROGRESS") && (
                  <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                )}
                <div>
                  <h2 className="text-sm font-medium text-gray-900">
                    {request.fileName}
                  </h2>
                  <div className="text-xs text-gray-500">
                    Created{" "}
                    {formatDistanceToNow(
                      new Date(request.createdAt._seconds * 1000)
                    )}{" "}
                    ago
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {request?.ocrData?.data?.documentName && (
                  <span className="text-sm text-gray-600">
                    {request.ocrData.data.documentName}
                  </span>
                )}
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    request.status === "COMPLETED"
                      ? "bg-green-100 text-green-800"
                      : request.status === "FAILED"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {request.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedRequest && (
        <OCRDetailsModal
          request={selectedRequest}
          isOpen={!!selectedRequest}
          onClose={() => setSelectedRequest(null)}
        />
      )}
    </div>
  );
}
