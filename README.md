# OCR Document Management System

A modern web application for document scanning, OCR processing, and management built with Next.js 13+.

## Architecture Overview

The application follows a modern Next.js 13+ architecture with App Router, leveraging server and client components for optimal performance.

### Basic System Architecture Diagram

![System Architecture Diagram](files://public/images/system-architecture.png)

### Sequencee Diagram

```mermaid
sequenceDiagram
participant ocr-fe as OCR Fronted
participant ocr-be as OCR Backend
participant ocr-processor as OCR Processor
participant gcs as Cloud Storage
participant firestore as FireStore
participant pubsub as Pub/Sub
autonumber

    ocr-fe->>+ocr-be: OCR Request (Image)
        ocr-be->>+gcs: Save file
        gcs->>-ocr-be: file saved
        ocr-be->>+firestore: OCR Request Data
        firestore->>-ocr-be: Reuqest Id.
        ocr-be->>+pubsub: Publish to OCR_QUEUE
        pubsub->>-ocr-be: Message id
    ocr-be->>-ocr-fe: request id / redirect

    par Polling
        ocr-fe->>+ocr-be: Poll requests
        ocr-be-->-ocr-fe: OCR Requests Data
    and OCR
        autonumber 9
        pubsub->>+ocr-processor: OCR Request
        activate pubsub
            ocr-processor->>+firestore: Get OCR Request Data
            firestore->>-ocr-processor: Reuqest Data.
            ocr-processor->>ocr-processor: Recognize
            ocr-processor->>+firestore: Save Recognized Data
            firestore->>-ocr-processor: Saved
        ocr-processor->>-pubsub: Success / Failure
        deactivate pubsub
    end
```
