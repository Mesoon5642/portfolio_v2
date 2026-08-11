"use client";

import MatrixCanvas from "./matrixcanvas";

export default function TheMatrix({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <div>
            <div className="fixed inset-0 -z-10">
              <MatrixCanvas />
            </div>
            {children}
        </div>
    )
}
