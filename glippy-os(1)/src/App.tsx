/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { BootScreen } from "./components/BootScreen";
import { Desktop } from "./components/Desktop";

export default function App() {
  const [isBooted, setIsBooted] = useState(false);

  // Handle boot sequence
  useEffect(() => {
    // Artificial boot delay
    const timer = setTimeout(() => {
      setIsBooted(true);
    }, 4500); // Progress bar in html images takes some time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden select-none crt-effect">
      {!isBooted ? (
        <BootScreen onComplete={() => setIsBooted(true)} />
      ) : (
        <Desktop />
      )}
    </div>
  );
}
