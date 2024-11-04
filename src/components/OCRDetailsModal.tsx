import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { OCRRequest } from "@/types/ocr";
import { formatDistanceToNow } from "date-fns";

interface Props {
  request: OCRRequest;
  isOpen: boolean;
  onClose: () => void;
}

export default function OCRDetailsModal({ request, isOpen, onClose }: Props) {
  const [visibleFields, setVisibleFields] = useState<Record<string, boolean>>(
    {}
  );

  const toggleFieldVisibility = (field: string) => {
    setVisibleFields((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const maskValue = (value: string) => "X".repeat(value.length);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
                <Dialog.Title className="text-lg font-medium mb-4">
                  {request.fileName}
                </Dialog.Title>

                <div className="space-y-4">
                  <div>
                    <span className="font-medium">Status: </span>
                    <span
                      className={`px-2 py-1 text-sm rounded ${
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

                  {request?.ocrData?.success && request.ocrData.data && (
                    <>
                      {/* Name */}
                      {request.ocrData.data.fullName && (
                        <div className="flex items-center justify-between">
                          <div className="flex-grow">
                            <span className="font-medium">Name: </span>
                            <span>{request.ocrData.data.fullName}</span>
                          </div>
                        </div>
                      )}

                      {/* Father Name */}
                      {request.ocrData.data.fatherName && (
                        <div className="flex items-center justify-between">
                          <div className="flex-grow">
                            <span className="font-medium">Father Name: </span>
                            <span>
                              {visibleFields.fatherName
                                ? request.ocrData.data.fatherName
                                : maskValue(request.ocrData.data.fatherName)}
                            </span>
                          </div>
                          <button
                            onClick={() => toggleFieldVisibility("fatherName")}
                            className="ml-2 p-1 hover:bg-gray-100 rounded"
                            title={visibleFields.fatherName ? "Hide" : "Show"}
                          >
                            {visibleFields.fatherName ? (
                              <svg
                                className="h-5 w-5 text-gray-500"
                                fill="none"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                              </svg>
                            ) : (
                              <svg
                                className="h-5 w-5 text-gray-500"
                                fill="none"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            )}
                          </button>
                        </div>
                      )}

                      {/* Date of Birth */}
                      {request.ocrData.data.dateOfBirth && (
                        <div className="flex items-center justify-between">
                          <div className="flex-grow">
                            <span className="font-medium">Date of Birth: </span>
                            <span>
                              {visibleFields.dateOfBirth
                                ? request.ocrData.data.dateOfBirth
                                : maskValue(request.ocrData.data.dateOfBirth)}
                            </span>
                          </div>
                          <button
                            onClick={() => toggleFieldVisibility("dateOfBirth")}
                            className="ml-2 p-1 hover:bg-gray-100 rounded"
                            title={visibleFields.dateOfBirth ? "Hide" : "Show"}
                          >
                            {visibleFields.dateOfBirth ? (
                              <svg
                                className="h-5 w-5 text-gray-500"
                                fill="none"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                              </svg>
                            ) : (
                              <svg
                                className="h-5 w-5 text-gray-500"
                                fill="none"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                            )}
                          </button>
                        </div>
                      )}

                      {/* Document Number */}
                      {request.ocrData.data.panNumber && (
                        <div className="flex items-center justify-between">
                          <div className="flex-grow">
                            <span className="font-medium">
                              Document Number:{" "}
                            </span>
                            <span>{request.ocrData.data.panNumber}</span>
                          </div>
                        </div>
                      )}

                      {/* Document Type */}
                      {request.ocrData.data.documentName && (
                        <div className="flex items-center justify-between">
                          <div className="flex-grow">
                            <span className="font-medium">Document Type: </span>
                            <span>{request.ocrData.data.documentName}</span>
                          </div>
                        </div>
                      )}

                      {/* Issuing Authority */}
                      {request.ocrData.data.issuingAuthority && (
                        <div className="flex items-center justify-between">
                          <div className="flex-grow">
                            <span className="font-medium">
                              Issuing Authority:{" "}
                            </span>
                            <span>{request.ocrData.data.issuingAuthority}</span>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  <div className="text-sm text-gray-500">
                    Created{" "}
                    {formatDistanceToNow(
                      new Date(request.createdAt._seconds * 1000)
                    )}{" "}
                    ago
                  </div>
                </div>

                <button
                  className="mt-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none"
                  onClick={onClose}
                >
                  Close
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
