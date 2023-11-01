"use client";
import React, { use, useEffect, useRef } from "react";
import { useQRCode } from "next-qrcode";

function QR() {
  const { Canvas } = useQRCode();
  const [value, setValue] = React.useState("https://skyderdigital.com");
  const [canvasRef, setCanvas] = React.useState<HTMLCanvasElement>();
  const ref = useRef<HTMLDivElement>(null);
  function convertCanvasToFile(canvas: HTMLCanvasElement): Promise<File> {
    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "image.png", { type: "image/png" });
          resolve(file);
        } else {
          reject(new Error("Failed to convert canvas to file"));
        }
      }, "image/png");
    });
  }
  function downloadFile(file: File): void {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  useEffect(() => {
    if (ref.current && ref.current?.children[0].children[0]) {
      setCanvas(ref.current?.children[0].children[0] as HTMLCanvasElement);
    }
  });
  return (
    <div
      className=" w-screen h-screen justify-center items-center content-center flex flex-col"
      ref={ref}
    >
      <button
        onClick={() => {
          if (canvasRef)
            convertCanvasToFile(canvasRef).then((file) => {
              downloadFile(file);
            });
        }}
      >
        <Canvas
          text={value}
          options={{
            errorCorrectionLevel: "M",
            margin: 5,
            scale: 4,
            width: 200,
            color: {
              dark: "#000000",
              light: "#FFFFFF",
            },
          }}
        />
      </button>
    </div>
  );
}

export default QR;
