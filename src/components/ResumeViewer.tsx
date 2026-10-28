"use client";

import { useEffect, useRef, useState } from "react";
import type { PDFDocumentLoadingTask, PDFDocumentProxy } from "pdfjs-dist";
import { resumePdfHref } from "./resume-data";
import styles from "./ResumeViewer.module.css";

type PdfApi = typeof import("pdfjs-dist");

export default function ResumeViewer() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<HTMLDivElement>(null);
  const [document, setDocument] = useState<{ pdf: PDFDocumentProxy; api: PdfApi } | null>(null);
  const [width, setWidth] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [rendering, setRendering] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let disposed = false;
    let loadingTask: PDFDocumentLoadingTask | undefined;

    const load = async () => {
      const api = await import("pdfjs-dist");
      if (disposed) return;
      api.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url,
      ).toString();
      loadingTask = api.getDocument({ url: resumePdfHref, isEvalSupported: false });
      const pdf = await loadingTask.promise;
      if (!disposed) setDocument({ pdf, api });
    };

    void load().catch(() => {
      if (!disposed) setError(true);
    });

    return () => {
      disposed = true;
      void loadingTask?.destroy().catch(() => undefined);
    };
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.floor(entry.contentRect.width));
    });
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const pages = pagesRef.current;
    if (!document || !pages || width <= 0) return;
    let disposed = false;
    const tasks: { cancel: () => void }[] = [];

    const render = async () => {
      setRendering(true);
      const { pdf, api } = document;
      pages.replaceChildren();
      pages.style.width = `${Math.floor(width * zoom)}px`;

      for (let number = 1; number <= pdf.numPages; number++) {
        const page = await pdf.getPage(number);
        if (disposed) return;
        const base = page.getViewport({ scale: 1 });
        const viewport = page.getViewport({ scale: (width * zoom) / base.width });
        const pixelRatio = Math.min(
          window.devicePixelRatio || 1,
          2,
          Math.sqrt(12_000_000 / (viewport.width * viewport.height)),
        );
        const owner = pages.ownerDocument;
        const sheet = owner.createElement("div");
        sheet.className = styles.page;
        sheet.setAttribute("role", "group");
        sheet.setAttribute("aria-label", `Résumé page ${number} of ${pdf.numPages}`);
        sheet.style.width = `${viewport.width}px`;
        sheet.style.height = `${viewport.height}px`;
        sheet.style.setProperty("--total-scale-factor", `${viewport.scale * viewport.userUnit}`);

        const canvas = owner.createElement("canvas");
        canvas.setAttribute("aria-hidden", "true");
        canvas.width = Math.ceil(viewport.width * pixelRatio);
        canvas.height = Math.ceil(viewport.height * pixelRatio);
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;
        const text = owner.createElement("div");
        text.className = styles.textLayer;
        sheet.append(canvas, text);
        pages.append(sheet);

        const paint = page.render({
          canvas,
          viewport,
          transform: [pixelRatio, 0, 0, pixelRatio, 0, 0],
        });
        tasks.push(paint);
        await Promise.all([
          paint.promise,
          (async () => {
            const textContent = await page.getTextContent();
            if (disposed) return;
            const textLayer = new api.TextLayer({ textContentSource: textContent, container: text, viewport });
            tasks.push(textLayer);
            await textLayer.render();
          })(),
        ]);
      }
      if (!disposed) setRendering(false);
    };

    void render().catch(() => {
      if (!disposed) setError(true);
    });
    return () => {
      disposed = true;
      tasks.forEach((task) => task.cancel());
    };
  }, [document, width, zoom]);

  const zoomButton =
    "inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--line)] bg-[var(--paper-elev)] text-lg text-[var(--ink)] hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:opacity-30";

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] bg-[var(--paper-tint)]/60 px-4 py-3 sm:px-6">
        <p className="text-sm font-medium text-[var(--ink)]">
          Alexandra Zach
          {document && <span className="ml-3 text-xs font-normal text-[var(--muted)]">{document.pdf.numPages} {document.pdf.numPages === 1 ? "page" : "pages"}</span>}
        </p>
        <div className="flex items-center gap-2" role="group" aria-label="Document zoom">
          <button type="button" aria-label="Zoom out" disabled={!document || zoom <= 0.75} onClick={() => setZoom((value) => value - 0.25)} className={zoomButton}>−</button>
          <output className="min-w-12 text-center text-xs tabular-nums text-[var(--muted)]" aria-label="Zoom level">{Math.round(zoom * 100)}%</output>
          <button type="button" aria-label="Zoom in" disabled={!document || zoom >= 4} onClick={() => setZoom((value) => value + 0.25)} className={zoomButton}>+</button>
          <button type="button" onClick={() => setZoom(1)} disabled={!document} className="ml-1 rounded-sm px-1 text-xs font-medium text-[var(--accent-strong)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">Fit width</button>
        </div>
      </div>
      {error && (
        <p role="alert" className="px-6 py-12 text-center text-sm text-[var(--body)]">
          The preview could not load. You can still use the Download PDF button above.
        </p>
      )}
      <div ref={viewportRef} aria-busy={rendering && !error} className="min-w-0 overflow-x-auto bg-[var(--paper-tint)]/40 p-2 sm:p-5">
        {!document && !error && <p role="status" className="py-20 text-center text-sm text-[var(--muted)]">Loading résumé…</p>}
        {document && rendering && !error && <span role="status" className="sr-only">Rendering résumé…</span>}
        <div ref={pagesRef} className="min-w-full space-y-5" />
      </div>
    </>
  );
}
