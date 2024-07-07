"use client";
import { motion } from "framer-motion";
import React, { useCallback, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { ArrowDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ButtonDownload from "@/components/base/button-download";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();
const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};
type PDFFile = string | File | null;
const resizeObserverOptions = {};
const maxWidth = 1024;

export default function CVPage() {
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();
  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);
  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
  }
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-5 py-10">
      <ButtonDownload />
      <div
        ref={setContainerRef}
        className="w-full max-w-5xl space-y-5 md:space-y-10"
      >
        <div className="relative">
          <Document
            file={"./cover-letter.pdf"}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            className={
              "overflow-hidden rounded-lg !bg-background transition-all dark:invisible"
            }
          >
            <Page
              className={"!bg-background"}
              pageNumber={numPages}
              width={
                containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
              }
            />
          </Document>
          <Document
            file={"./cover-letter-dark.pdf"}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            className={
              "invisible absolute inset-0 left-0 top-0 overflow-hidden rounded-lg !bg-background transition-all dark:visible"
            }
          >
            <Page
              pageNumber={numPages}
              className={"!bg-background"}
              width={
                containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
              }
            />
          </Document>
        </div>
        <div className="relative">
          <Document
            file={"./cv-winlax-frontend-developer.pdf"}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            className={
              "overflow-hidden rounded-lg !bg-background transition-all dark:invisible"
            }
          >
            <Page
              className={"!bg-background"}
              pageNumber={numPages}
              width={
                containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
              }
            />
          </Document>
          <Document
            file={"./cv-winlax-frontend-developer-dark.pdf"}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            className={
              "invisible absolute inset-0 left-0 top-0 overflow-hidden rounded-lg !bg-background transition-all dark:visible"
            }
          >
            <Page
              className={"!bg-background"}
              pageNumber={numPages}
              width={
                containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
              }
            />
          </Document>
        </div>
      </div>
    </div>
  );
}
