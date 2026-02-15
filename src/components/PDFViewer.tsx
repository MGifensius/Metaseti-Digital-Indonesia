import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set up the worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  fileUrl: string;
}

export default function PDFViewer({ fileUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageWidth, setPageWidth] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function goToPreviousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      // Scroll to the PDF container instead of page top
      const pdfContainer = document.querySelector('.pdf-container');
      if (pdfContainer) {
        pdfContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  function goToNextPage() {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
      // Scroll to the PDF container instead of page top
      const pdfContainer = document.querySelector('.pdf-container');
      if (pdfContainer) {
        pdfContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Calculate width on mount and resize
  useEffect(() => {
    const updateWidth = () => {
      const container = document.querySelector('.pdf-container');
      if (container) {
        const containerWidth = container.clientWidth;
        // Full width minus padding for better mobile viewing
        const padding = window.innerWidth < 768 ? 16 : 32;
        setPageWidth(containerWidth - padding);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    // Small delay to ensure container is rendered
    setTimeout(updateWidth, 100);
    
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      {/* PDF Document */}
      <div className="relative w-full bg-gray-100 rounded-lg md:rounded-xl overflow-hidden pdf-container p-2 md:p-4">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 min-h-[500px] md:min-h-[600px]">
            <div className="text-gray-600 text-sm md:text-base">Loading PDF...</div>
          </div>
        )}
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-[500px] md:h-[600px]">
              <div className="text-gray-600 text-sm md:text-base">Loading document...</div>
            </div>
          }
          error={
            <div className="flex items-center justify-center h-[500px] md:h-[600px] p-4">
              <div className="text-red-600 text-sm md:text-base text-center">Failed to load PDF. Please try downloading it.</div>
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="mx-auto shadow-sm"
            width={pageWidth || 300}
          />
        </Document>
      </div>

      {/* Navigation Controls - Mobile Optimized */}
      <div className="flex items-center justify-center w-full mt-6 md:mt-8 gap-3 md:gap-4 px-2">
        {/* Previous Button */}
        <button
          onClick={goToPreviousPage}
          disabled={pageNumber <= 1}
          className="flex items-center justify-center gap-1 md:gap-2 px-4 md:px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 active:bg-gray-900 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300 text-sm md:text-base font-medium min-w-[80px] md:min-w-[100px] touch-manipulation"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden xs:inline">Prev</span>
        </button>

        {/* Page Counter */}
        <div className="text-center flex-shrink-0 px-2">
          <p className="text-xs md:text-sm text-gray-600 mb-0.5">Page</p>
          <p className="text-xl md:text-2xl font-normal text-black whitespace-nowrap">
            {pageNumber}<span className="text-gray-400 mx-1">/</span>{numPages}
          </p>
        </div>

        {/* Next Button */}
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className="flex items-center justify-center gap-1 md:gap-2 px-4 md:px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 active:bg-gray-900 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300 text-sm md:text-base font-medium min-w-[80px] md:min-w-[100px] touch-manipulation"
          aria-label="Next page"
        >
          <span className="hidden xs:inline">Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Download Button */}
      <div className="mt-4 md:mt-6 px-4 w-full sm:w-auto">
        <a
          href={fileUrl}
          download
          className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 bg-white text-black border-2 border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 transition-all text-sm md:text-base font-medium w-full sm:w-auto touch-manipulation"
          aria-label="Download PDF"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <span>Download PDF</span>
        </a>
      </div>

      {/* Mobile Instructions */}
      <div className="mt-4 md:hidden text-center px-4">
        <p className="text-xs text-gray-500">
          Pinch to zoom • Swipe to scroll • Use buttons to navigate pages
        </p>
      </div>
    </div>
  );
}
