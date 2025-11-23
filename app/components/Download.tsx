'use client';

export default function DownloadCV() {
  return (
    <div className="my-6">
      <a
        href="/CV-Manich_Dibakto.pdf" 
        download
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Telecharger mon CV
      </a>
    </div>
  );
}
