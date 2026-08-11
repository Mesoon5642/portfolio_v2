'use client';

import { useEffect, useRef } from "react";
import "./css/globals.css";
import "./css/matrix.css";
import { randomUnicodeChar, randomInt } from "./scripts/globals";

const CELL_SIZE = 16;
const TICK_MS = 25;
const FADE_MS = 2000;
const ERASE_ALPHA = 0.04;
const VIOLET_600 = "#7c3aed";

interface ColumnState {
  x: number;
  y: number;
  state: "falling" | "fading" | "waiting";
  nextCharAt: number;
  fadeStart: number;
  respawnAt: number;
}

export default function MatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const columnsRef = useRef<ColumnState[]>([]);
  const rafRef = useRef<number>(0);
  const sizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    function initColumns(count: number, now: number): ColumnState[] {
      return Array.from({ length: count }, (_, i) => ({
        x: i * CELL_SIZE,
        y: 0,
        state: "waiting",
        nextCharAt: 0,
        fadeStart: 0,
        respawnAt: now + randomInt(500, 2500),
      }));
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      sizeRef.current = { w, h };
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.font = `${CELL_SIZE}px "Source Code Pro", monospace`;
      ctx!.textBaseline = "top";
      columnsRef.current = initColumns(Math.ceil(w / CELL_SIZE), performance.now());
    }

    function tick(timestamp: number) {
      const { h } = sizeRef.current;
      for (const col of columnsRef.current) {
        if (col.state === "waiting") {
          if (timestamp >= col.respawnAt) {
            col.state = "falling";
            col.y = 0;
            col.nextCharAt = timestamp;
          }
          continue;
        }
        if (col.state === "falling") {
          if (timestamp >= col.nextCharAt) {
            ctx!.globalCompositeOperation = "source-over";
            ctx!.fillStyle = VIOLET_600;
            ctx!.fillText(randomUnicodeChar(0x0021, 0x007e), col.x, col.y);
            col.y += CELL_SIZE;
            col.nextCharAt = timestamp + TICK_MS;
            if (col.y >= h) {
              col.state = "fading";
              col.fadeStart = timestamp;
            }
          }
          continue;
        }
        const elapsed = timestamp - col.fadeStart;
        if (elapsed >= FADE_MS) {
          ctx!.clearRect(col.x, 0, CELL_SIZE, h);
          col.state = "waiting";
          col.respawnAt = timestamp + randomInt(500, 2500);
        } else {
          ctx!.globalCompositeOperation = "destination-out";
          ctx!.fillStyle = `rgba(0,0,0,${ERASE_ALPHA})`;
          ctx!.fillRect(col.x, 0, CELL_SIZE, h);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="block" />;
}
