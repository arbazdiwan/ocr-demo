export interface OCRData {
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

export interface OCRRequest {
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
