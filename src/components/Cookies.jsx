import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50 shadow-lg">
      <p className="text-sm mb-2 md:mb-0">
        This website uses cookies to improve your experience.
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleAccept}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
